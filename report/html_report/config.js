report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1024px.png",
        "test": "../bitmaps_test/20221126-005006/Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -8
          },
          "misMatchPercentage": "0.66",
          "analysisTime": 48
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_720px.png",
        "test": "../bitmaps_test/20221126-005006/Entire_document_720px.png",
        "selector": "document",
        "fileName": "Entire_document_720px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -8
          },
          "misMatchPercentage": "0.94",
          "analysisTime": 43
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Big_search_bar_data-qa_big_1024px.png",
        "test": "../bitmaps_test/20221126-005006/Big_search_bar_data-qa_big_1024px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_1024px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.73",
          "analysisTime": 16
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Big_search_bar_data-qa_big_720px.png",
        "test": "../bitmaps_test/20221126-005006/Big_search_bar_data-qa_big_720px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_720px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.05",
          "analysisTime": 27
        },
        "diffImage": "../bitmaps_test/20221126-005006/failed_diff_Big_search_bar_data-qa_big_720px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Small_search_bar_data-qa_small_1024px.png",
        "test": "../bitmaps_test/20221126-005006/Small_search_bar_data-qa_small_1024px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_1024px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.33",
          "analysisTime": 23
        },
        "diffImage": "../bitmaps_test/20221126-005006/failed_diff_Small_search_bar_data-qa_small_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Small_search_bar_data-qa_small_720px.png",
        "test": "../bitmaps_test/20221126-005006/Small_search_bar_data-qa_small_720px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_720px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.91",
          "analysisTime": 31
        },
        "diffImage": "../bitmaps_test/20221126-005006/failed_diff_Small_search_bar_data-qa_small_720px.png"
      },
      "status": "fail"
    }
  ]
});