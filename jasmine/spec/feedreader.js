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

        /* Test to ensure that each feed 'name' is defined
        /* and not empty.
        */
        it('names are defined and are not empty', function() {
            //iterate over allFeeds array
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual(' ', '', null);
            }
        });

    });


    /* This test suite is for the menu (toggles on click) */
    describe('The menu', function() {
        let body = document.querySelector('body');
        //let bodyClass = body.className;
        let callback = jasmine.createSpy('body', 'toggleClass');
        let menuIcon = document.querySelector('.menu-icon-link');

        //'body' element has class 'menu-hidden'
         // The event listener that calls toggleClass has not been called
        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
            expect(callback).not.toHaveBeenCalled();
        });

         /* An even number of clicks should result in the menu being hidden
          */
        it('changes visibility when menu icon is clicked', function() {
           if (callback.calls.count() % 2 === 0) {
               expect(body.classList.contains('menu-hidden')).toBe(true);
           } else {
               expect(body.classList.contains('menu-hidden')).toBe(false);
           }  
        });
    });
    
    describe('Initial Entries', function() {
        
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* When the loadFeed function is called and completes its work, 
        * check that there is at least a single .entry element within 
        * the .feed container. loadFeed() is asynchronous so this test requires
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */

        it('has at least one .entry element within the .feed container', function() {
            let rssFeed = document.querySelector('.feed');
            let feedEntry = document.querySelectorAll('.feed .entry');
        
            expect(rssFeed).toBeDefined();
            expect(rssFeed).not.toBeNull();
            expect(feedEntry).toBeDefined();
            expect(feedEntry.length).toBeGreaterThan(0)
        });

    });

    describe('New Feed Selection', function() {
        let rssFeed = document.querySelector('.feed');
        let startFeed, nextFeed;
        
        /* Remember that a callback function can be
        * passed into loadFeed as a second parameter,
        * which is called after everything has run
        * successfully.
        */
        beforeEach(function (done) {
            loadFeed(0, function() {
                startFeed = rssFeed.innerHTML;
                loadFeed(1, function() {
                    nextFeed = rssFeed.innerHTML;
                    done();
                });
            });      
        });

        /* HTML of first feed is compared with HTML of new 
        /* feed. The test is passed if they are not equal. 
        */
        it('has new content', function() {             
            expect(startFeed === nextFeed).toBe(false);   
        });
    });
}());

            