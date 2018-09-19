/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Next, we test to make sure that each object in the 
        /* allFeeds array has a defined 'url' property. We also
        /* test to make sure that the url property values are
        /* valid.
        */
        it('URLs are defined and are not empty', function() {
            //iterate over allFeeds array
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual(' ', '', null);
                expect(feed.url.startsWith('http')).toBe(true);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });


    /* This test suite is for the menu (toggles on click) */
    describe('The menu', function() {
        let body = document.querySelector('body');
        let bodyClass = body.className;
        let callback = jasmine.createSpy('body', 'toggleClass');
        let menuIcon = document.querySelector('.menu-icon-link');
        //let menuClick = jasmine.createSpy('menuIcon', 'clicked');

        //'body' element has class 'menu-hidden'
         // The event listener that calls toggleClass has not been called
        it('is hidden by default', function() {
            expect(bodyClass).toEqual('menu-hidden');
            expect(callback).not.toHaveBeenCalled();
        });

         /* An even number of clicks should result in the menu being hidden
          */
        it('changes visibility when menu icon is clicked', function() {
           if (callback.calls.count() % 2 === 0) {
               expect(bodyClass).toEqual('menu-hidden');
           } else {
               expect(bodyClass).not.toEqual('menu-hidden');
           }  
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
 

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
