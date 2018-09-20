# Project Overview

A test suite has been started for a web-based application that reads RSS feeds. This project is to complete the tests for the main features of the application. 

The tests target the underlying business logic of the application as well as event handling and DOM manipulation.

# Test Details

There are four test suites:

## RSS Feeds
1. Check that `allFeeds` is defined and not empty.
2. Check that each feed in the `allFeeds` object has a URL defined and that the URL is not empty.
3. Check that each feed in the `allFeeds` object has a name defined and that the name is not empty.

## The Menu
1. Test that the menu element is hidden by default. 
2. Ensure that the menu changes visibility when the menu icon is clicked. 

## Initial Entries
1. Ensure that when the `loadFeed` function is first called and completes its work, there is at least a single `.entry` element within the `.feed` container, i.e. the feed loads successfully the first time, with entries.

## New Feed Selection
1. Check that when a new feed is loaded by the `loadFeed` function, the feed entries do change.

# Run Tests

To run the tests for this application:
1. Download the [project assets](http://github.com/kbatuigas/frontend-nanodegree-feedreader), which include the Jasmine library in **./jasmine** and spec file in **./jasmine/spec/feedreader.js**.
2. Open the application's HTML (**./index.html**) in the browser. Scroll to the bottom of the page to view the test results. All of the tests should pass.

An understanding of testing with [Jasmine](http://jasmine.github.io/) is beneficial. This application uses Jasmine 2.1.2. Documentation is available [here](https://jasmine.github.io/2.1/introduction).

More tests and test suites can be added by modifying the Jasmine spec file.

# Grow with Google - Udacity project resources
1. GwG FEND scholar Matthew Cranford's [blog series](https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/)
2. GwG FEND scholar Ryan Boris' [project walkthrough webinar](https://www.youtube.com/watch?v=7kOBXPbDmyw&feature=youtu.be)

