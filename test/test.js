/* eslint-disable func-names */
import "dotenv/config";

import puppeteer from "puppeteer";

import server from "../server/server";
import { pages, randomString } from "./helpers";

require("chai").should();

const port = process.env.PORT || 7999;

describe("Page Load Tests:", async function () {
  this.timeout(120000);
  let instance;
  let browser;
  let page;

  before(async () => {
    // before all of the tests
    instance = server.listen(port);
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
    await instance.close();
  });

  async function checkRender(args) {
    it(`check if ${args.route} renders`, async () => {
      await page.goto(`http://localhost:${port}${args.route}`);
      await page.waitFor(1000);
      const title = await page.evaluate(() => document.title);
      title.should.equal(args.title);

      await page.waitForSelector("article > header > div > h2 > a");
      const header = await page.evaluate(
        () => document.querySelector("article > header > div > h2 > a").innerText
      );
      header.should.equal(args.heading);
    });
  }

  // Check each page except for 404 and API routes
  pages.forEach((url) => checkRender(url));

  it("check if games page renders gamer layout with image-rich cards", async () => {
    await page.goto(`http://localhost:${port}/games`);
    await page.waitFor(1000);
    await page.waitForSelector("#games .games-hud");
    await page.waitForSelector("#games .games-grid .mini-post");

    const result = await page.evaluate(() => {
      const cards = Array.from(
        document.querySelectorAll("#games .games-grid .mini-post")
      );
      const missingImageSrc = cards.filter((card) => {
        const image = card.querySelector("img");
        return !image || !image.getAttribute("src");
      });

      return {
        cardCount: cards.length,
        missingImageCount: missingImageSrc.length,
      };
    });

    result.cardCount.should.be.greaterThan(0);
    result.missingImageCount.should.equal(0);
  });

  it("check if portfolio uses modern dark theme styling", async () => {
    await page.goto(`http://localhost:${port}/`);
    await page.waitFor(1000);
    await page.waitForSelector("article.post");

    const theme = await page.evaluate(() => {
      const bodyStyles = window.getComputedStyle(document.body);
      const postStyles = window.getComputedStyle(
        document.querySelector("article.post")
      );
      const bodyAfterStyles = window.getComputedStyle(document.body, "::after");

      return {
        bodyBackgroundImage: bodyStyles.backgroundImage,
        postBorderRadius: postStyles.borderRadius,
        wrapperShineAnimation: bodyAfterStyles.animationName,
        wrapperShineZIndex: bodyAfterStyles.zIndex,
      };
    });

    theme.bodyBackgroundImage.should.not.equal("none");
    parseFloat(theme.postBorderRadius).should.be.greaterThan(0);
    theme.wrapperShineAnimation.should.not.equal("none");
    parseFloat(theme.wrapperShineZIndex).should.be.lessThan(0);
  });

  it("check if projects page cards are styled and links are valid", async () => {
    await page.goto(`http://localhost:${port}/projects`);
    await page.waitFor(1000);
    await page.waitForSelector("#projects .project-card");

    const projects = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll("#projects .project-card"));
      const firstCard = cards[0];
      const firstCardStyles = firstCard ? window.getComputedStyle(firstCard) : null;
      const invalidLinks = cards.filter((card) => {
        const anchor = card.querySelector("header h3 a");
        return anchor && anchor.href.includes("undefined");
      });

      return {
        count: cards.length,
        invalidLinkCount: invalidLinks.length,
        borderRadius: firstCardStyles ? firstCardStyles.borderRadius : "0px",
        hasShadow: firstCardStyles ? firstCardStyles.boxShadow !== "none" : false,
        headerPaddingLeft: firstCard
          ? window.getComputedStyle(firstCard.querySelector("header")).paddingLeft
          : "0px",
        firstImageFit: firstCard
          ? window.getComputedStyle(firstCard.querySelector(".project-image img")).objectFit
          : "",
        cardHeightSpread: cards.length
          ? Math.max(...cards.map((card) => card.getBoundingClientRect().height))
            - Math.min(...cards.map((card) => card.getBoundingClientRect().height))
          : 0,
        privateBadgeBorderStyle: firstCard
          ? window.getComputedStyle(firstCard.querySelector(".project-cta--disabled")).borderStyle
          : "",
        privateBadgeBackgroundImage: firstCard
          ? window.getComputedStyle(firstCard.querySelector(".project-cta--disabled")).backgroundImage
          : "",
        noOverlap: firstCard
          ? (() => {
            const description = firstCard.querySelector(".description");
            const cta = firstCard.querySelector(".project-cta, .project-cta--disabled");
            if (!description || !cta) return false;
            const descriptionRect = description.getBoundingClientRect();
            const ctaRect = cta.getBoundingClientRect();
            return ctaRect.top >= descriptionRect.bottom;
          })()
          : false,
      };
    });

    projects.count.should.be.greaterThan(0);
    projects.invalidLinkCount.should.equal(0);
    parseFloat(projects.borderRadius).should.be.greaterThan(0);
    projects.hasShadow.should.equal(true);
    parseFloat(projects.headerPaddingLeft).should.be.greaterThan(0);
    projects.firstImageFit.should.equal("contain");
    projects.cardHeightSpread.should.be.lessThan(8);
    projects.privateBadgeBorderStyle.should.equal("dashed");
    projects.privateBadgeBackgroundImage.should.equal("none");
    projects.noOverlap.should.equal(true);
  });

  it("check if mobile slider nav shows all routes vertically", async () => {
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`http://localhost:${port}/about`);
    await page.waitFor(1000);
    await page.waitForSelector(".open-menu .menu-hover");
    await page.click(".open-menu .menu-hover");
    await page.waitForSelector(".hamburger-ul li");

    const mobileNav = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll(".hamburger-ul li"));
      const firstItem = items[0];
      const menuList = document.querySelector(".hamburger-ul");
      const menuWrap = document.querySelector(".bm-menu-wrap");

      return {
        count: items.length,
        firstDisplay: firstItem ? window.getComputedStyle(firstItem).display : "",
        menuOverflowY: menuList ? window.getComputedStyle(menuList).overflowY : "",
        menuWrapHeight: menuWrap ? menuWrap.getBoundingClientRect().height : 0,
        viewportHeight: window.innerHeight,
        firstHeadingMarginTop: firstItem
          ? parseFloat(
            window.getComputedStyle(firstItem.querySelector("h3")).marginTop
          )
          : 0,
      };
    });

    mobileNav.count.should.be.greaterThan(6);
    mobileNav.firstDisplay.should.equal("block");
    ["auto", "scroll"].includes(mobileNav.menuOverflowY).should.equal(true);
    mobileNav.menuWrapHeight.should.be.greaterThan(mobileNav.viewportHeight * 0.95);
    mobileNav.firstHeadingMarginTop.should.be.lessThan(4);
  });

  it("check if 404 renders", async () => {
    await page.goto(`http://localhost:${port}/${randomString(10)}`);
    await page.waitFor(1000);
    await page.waitForSelector("#root > div > h1");
    const title = await page.evaluate(() => document.title);
    title.should.equal("404");
    const header = await page.evaluate(
      () => document.querySelector(".not-found > h1").innerText
    );
    header.should.equal("PAGE NOT FOUND.");
  });
});

/* eslint-enable func-names */
