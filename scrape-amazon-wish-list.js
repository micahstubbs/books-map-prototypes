const jsonfile = require('jsonfile');
const AmazonListScraper = require('amazon-list-scraper').default;

const listTitle = 'vis-books';
const wishList = 'https://www.amazon.com/hz/wishlist/ls/1ODPU10TOS3I4?&sort=default';

const scraper = new AmazonListScraper();
scraper
  .scrape(wishList)
  .then(items => {
    console.log(items);
    //  [
    //    {
    //      title: 'The Principles of Object-Oriented JavaScript',
    //      price: 9.99,
    //      link: 'https://www.amazon.com/dp/B00I87B1H8/ref=wl_it_dp_v_nS_ttl/184-4221310-4664445?_encoding=UTF8&colid=1JMCNHNT959X2&coliid=I2ETH645CXBEGM'
    //    },
    //    {
    //      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    //      price: 38.6,
    //      link: 'https://www.amazon.com/dp/0132350882/ref=wl_it_dp_v_nS_ttl/184-4221310-4664445?_encoding=UTF8&colid=1JMCNHNT959X2&coliid=IDGP10KBLGRPV'
    //    }
    //  ]
    //
    // write the result out to a json file
    const outputData = items;
    const outputDir = 'data';
    const outputFile = `${outputDir}/${listTitle}.json`;
    jsonfile.spaces = 2;
    jsonfile.writeFile(outputFile, outputData, function(err) {
      console.error(err);
    });
  })
  .catch(error => {});
