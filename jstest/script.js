var info = {
  "items": {
    "c001": {
      "parent": "c000",
      "title": "Phones"
    },
    "c002": {
      "parent": "c000",
      "title": "Laptops"
    },
    "c003": {
      "parent": "c000",
      "title": "Accessories"
    },
    "p001": {
      "parent": "c001",
      "manufacturer": "Apple",
      "title": "iPhone 10",
      "price": 499,
      "releaseDate": "2018-04-23T18:25:43.511Z"
    },
    "p002": {
      "parent": "c002",
      "manufacturer": "Apple",
      "title": "Macbook Pro 2017",
      "price": 1999,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p003": {
      "parent": "c002",
      "manufacturer": "Dell",
      "title": "XPS 13",
      "price": 1399,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p004": {
      "parent": "c001",
      "manufacturer": "Samsung",
      "title": "Samsung Galaxy S10",
      "price": 399,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p005": {
      "parent": "c003",
      "manufacturer": "Apple",
      "title": "Apple Charger 12W",
      "price": 99,
      "releaseDate": "2016-12-23T18:25:43.511Z"
    },
    "p006": {
      "parent": "c003",
      "manufacturer": "Samsung",
      "title": "Samsung Charger 12W",
      "price": 89,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    }
  }
};

const items = info.items;
var header = "", item = "";

// normalize schema
const normalizedItems = Object.keys(items).map((id) => {
  return Object.assign(items[id], { id });
});
function searchByCategory(categoryId) {
  return normalizedItems.filter((i) => i.parent === categoryId);
}

console.log(searchByCategory('c001'));

function renderItems() {
  var a = searchByCategory('c000');
  for (var i = 0; i < a.length; i++) {
    header = "<div class='category'>" + a[i].title + "</div>";
    $(".content").append(header);

    var b = searchByCategory(a[i].id);
    b.forEach(function(items) {
      item = "<div class='items'><div class='title'>" + items.manufacturer +
      "</div><div class='desc'> " + items.title +  " </div><div class='btn_price'> $" + items.price + " </div></div>";
      $(".content").append(item);
    })
  }
}
renderItems();

