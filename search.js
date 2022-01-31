const search = instantsearch({
  indexName: 'plants',
  searchClient: algoliasearch('AAVKO2PL57', '9f8d6abc778effec3a2a465a5bc2218f'),
  routing: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for trees and plants',
  })
);

search.addWidget(
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#bloom-color',
    limit: 5,
    showMore: true,
    attribute: 'Bloom Color',
  })
);
search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#fall-color',
    limit: 5,
    showMore: true,
    attribute: 'Fall Color',
  })
);
search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#growth-rate',
    attribute: 'Growth Rate',
  })
);
search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#growing-zone',
    limit: 5,
    showMore: true,
    attribute: 'Growing Zone Areas',
  })
);
search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#tree-family',
    limit: 5,
    showMore: true,
    searchable: true,
    searchablePlaceholder: "Search all families",
    attribute: 'Tree Family',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#tree-type',
    attribute: 'Tree Type',
  })
);
search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: '#height-slider',
    attribute: 'Height',
  })
);
search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: '#width-slider',
    attribute: 'Spread',
  })
);
search.addWidget(
  instantsearch.widgets.hitsPerPage({
    container: '#hits-per-page',
    items: [
      { label: '24 plants per page', value: 24, default: true },
      { label: '50 plants per page', value: 50 },
      { label: '100 plants per page', value: 100 },
    ],
  })
);
// search.addWidget(
//     instantsearch.widgets.sortBy({
//         container: '#sort-by',
//         items: [
//             { label: 'Featured', value: 'instant_search' },
//             { label: 'Price (asc)', value: 'instant_search_price_asc' },
//             { label: 'Price (desc)', value: 'instant_search_price_desc' },
//         ],
//     })
// );
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
    <a href="{{Url}}" class="item-container w-inline-block">
        <div class="preview-image-container"><img src="{{Small image}}" onerror="this.style.display='none'" alt="{{Common Name}}" class="preview-image">
            <div class="feature-div">
                <div>{{Features}}</div>
            </div>
        </div>
        <div class="tree-preview">
            <div class="post-date">{{Scientific Name}}</div>
            <div class="h2 text-span cc-post-text">{{#helpers.highlight}}{ "attribute": "Common Name"
                }{{/helpers.highlight}}</div>
            <div class="size-preview-area">
                <div class="size-container">
                    <div class="_5px-right">Height:</div>
                    <div>{{Height}}</div>
                    <div>'</div>
                </div>
                <div class="size-container">
                    <div class="_5px-right">Spread:</div>
                    <div>{{Spread}}</div>
                    <div>'</div>
                </div>
                <div class="size-container">
                    <div class="_5px-right">Climate Zones</div>
                    <div>{{Growing Zone Areas}}</div>
                </div>
            </div>
            <div class="view-plant-button w-button">View More Info</div>
        </div>
    </a>
    `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();