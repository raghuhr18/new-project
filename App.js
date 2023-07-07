import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => {
    return(
        <img src="https://img.freepik.com/premium-vector/food-delivery-man-electric-scooter-courier-with-eat-bag-moped-graphic-delivery-service-vector-illustration_159025-1600.jpg?w=2000"/>
    );
}

const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList = ([
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "371422",
            "name": "Handi punjab ki",
            "uuid": "a694bfb9-4dc9-4818-9e9a-d8be5389944d",
            "city": "22",
            "area": "Hathibarkala Salwala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "vozwrqdkvfcfutehx4ld",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Tandoor"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 3.700000047683716,
            "slugs": {
              "restaurant": "handi-punjab-ki-hathibarkala-hathibarkala",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Water Works Dilaram bazar, Dilaram Chowk, Karanpur, Dehradun, Uttarakhand, India",
            "locality": "Rajpur Road",
            "parentId": 93115,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6566688~p=1~eid=00000188-2583-8954-5580-6c7d0014016e",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "371422",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 3.700000047683716,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "69769",
            "name": "Aman Vegetarian",
            "uuid": "4ef9eafb-9c6d-4e9b-b1e9-0bbd0e88f9ef",
            "city": "22",
            "area": "Paltan Bazaar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "ygczg6efdbjietl1req7",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Continental"
            ],
            "tags": [
              
            ],
            "costForTwo": 27500,
            "costForTwoString": "₹275 FOR TWO",
            "deliveryTime": 17,
            "minDeliveryTime": 17,
            "maxDeliveryTime": 17,
            "slaString": "17 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
              "restaurant": "aman-vegetarian-paltan-bazar-near-railway-station-hathibarkala",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Darshini Gate, Jhanda Mohalla, Paltan Bazaar,near railway station Dehradun",
            "locality": "Paltan Bazaar Road",
            "parentId": 13687,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "69769",
              "deliveryTime": 17,
              "minDeliveryTime": 17,
              "maxDeliveryTime": 17,
              "lastMileTravel": 0.4000000059604645,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 5000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "586794",
            "name": "New Paradise Bakers",
            "uuid": "847acaf3-2e9b-4763-8461-b05f82db8af6",
            "city": "22",
            "area": "Chukkuwala",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "473ad54c71b416ae36fd0f62a2519e51",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Snacks"
            ],
            "tags": [
              
            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 14,
            "minDeliveryTime": 14,
            "maxDeliveryTime": 14,
            "slaString": "14 MINS",
            "lastMileTravel": 0.20000000298023224,
            "slugs": {
              "restaurant": "new-paradise-bakers-chukkuwala-chukkuwala",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "12 Darshani Gate Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand - 248001",
            "locality": "Gandhi Road",
            "parentId": 351098,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "586794",
              "deliveryTime": 14,
              "minDeliveryTime": 14,
              "maxDeliveryTime": 14,
              "lastMileTravel": 0.20000000298023224,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "78057",
            "name": "Chilli'Z Restro",
            "uuid": "b44c3b35-b9a5-4b3a-95ec-d994923cbb46",
            "city": "22",
            "area": "Dharampur",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "gkeymduioynruheoqhlq",
            "cuisines": [
              "North Indian",
              "Indian",
              "Chinese"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "slaString": "18 MINS",
            "lastMileTravel": 2.799999952316284,
            "slugs": {
              "restaurant": "chilliz-restro-dharampur-dharampur",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "130, Araghar Ring Road, Dharampur, Dehradun",
            "locality": "Ring Road",
            "parentId": 13645,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6588602~p=4~eid=00000188-2583-8954-5580-6c7e00140456",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "78057",
              "deliveryTime": 18,
              "minDeliveryTime": 18,
              "maxDeliveryTime": 18,
              "lastMileTravel": 2.799999952316284,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "69499",
            "name": "Uss Da Dhaba",
            "uuid": "be843f94-4bb1-446f-854a-fed73c5f5926",
            "city": "22",
            "area": "Race Course",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "j6w0gbsy2pdoivjjlymp",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Continental"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 14,
            "minDeliveryTime": 14,
            "maxDeliveryTime": 14,
            "slaString": "14 MINS",
            "lastMileTravel": 0.699999988079071,
            "slugs": {
              "restaurant": "uss-da-dhaba-race-course-chukkuwala",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Near Hotel Saurab, 3 Court Road, Race Course, Dehradun",
            "locality": "Court Road",
            "parentId": 13693,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "69499",
              "deliveryTime": 14,
              "minDeliveryTime": 14,
              "maxDeliveryTime": 14,
              "lastMileTravel": 0.699999988079071,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "84229",
            "name": "Punjabi Dhaba",
            "uuid": "317a42f9-5111-400c-a254-1e2a8b677d64",
            "city": "22",
            "area": "Paltan Bazaar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "yyrjmyajqhyjq6mp1gha",
            "cuisines": [
              "North Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 0.6000000238418579,
            "slugs": {
              "restaurant": "punjabi-dhaba-prince-chowk-race-course-dehradun",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "59, Gandhi Road, Prince Chowk, Dehradun",
            "locality": "Gandhi Road",
            "parentId": 1476,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "84229",
              "deliveryTime": 23,
              "minDeliveryTime": 23,
              "maxDeliveryTime": 23,
              "lastMileTravel": 0.6000000238418579,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "281404",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "uuid": "1f9272c9-31be-46b5-9739-4526ea499d4e",
            "city": "22",
            "area": "Paltan Bazaar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "yfylnzwg8rcnk8alvitm",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
            ],
            "tags": [
              
            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 16,
            "minDeliveryTime": 16,
            "maxDeliveryTime": 16,
            "slaString": "16 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
              "restaurant": "kwality-walls-chukkuwala-chukkuwala",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "M/S KWIK BITE CENTRE 2/4, clock tower , gandhi road , paltan bazaar dehradun 248001",
            "locality": "Gandhi Road",
            "parentId": 582,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6794705~p=7~eid=00000188-2583-8954-5580-6c7f0014071e",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "281404",
              "deliveryTime": 16,
              "minDeliveryTime": 16,
              "maxDeliveryTime": 16,
              "lastMileTravel": 1.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.6",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "69447",
            "name": "Gaylord Express",
            "uuid": "bf891542-13ee-424c-b468-958bdd89a122",
            "city": "22",
            "area": "Paltan Bazaar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
            "cuisines": [
              "South Indian",
              "Chinese",
              "Bakery",
              "Italian"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 2.299999952316284,
            "slugs": {
              "restaurant": "gaylord-express-paltan-bazaar-chukkuwala",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "9, Near Samsung Shop, Paltan Bazaar, Dehradun",
            "locality": "Paltan Bazaar Road",
            "parentId": 13696,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "69447",
              "deliveryTime": 22,
              "minDeliveryTime": 22,
              "maxDeliveryTime": 22,
              "lastMileTravel": 2.299999952316284,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.5",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "363168",
            "name": "Doon Darbar",
            "uuid": "19724ef9-f91b-414c-8014-6d443adbefad",
            "city": "22",
            "area": "Dharampur",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "jbtwi5gn0rqott22goqm",
            "cuisines": [
              "North Indian",
              "Tandoor"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 4.199999809265137,
            "slugs": {
              "restaurant": "doon-darbar-dharampur-dharampur",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "SHASTRI NAGAR HARIDWAR ROAD  248001",
            "locality": "Shastri Nagar Market",
            "parentId": 13207,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6589096~p=31~eid=00000188-2583-8954-5580-6c8700141f7b",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "4.1 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "363168",
              "deliveryTime": 22,
              "minDeliveryTime": 22,
              "maxDeliveryTime": 22,
              "lastMileTravel": 4.199999809265137,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.5",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "376933",
            "name": "FIVE STAR PREMIUM",
            "uuid": "ea66199f-66f9-4d1a-9fcb-ec0847a2e9c2",
            "city": "22",
            "area": "Jakhan",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "h8w7qslg8jvsgusyqbbp",
            "cuisines": [
              "Bakery",
              "Sweets",
              "South Indian",
              "North Indian",
              "Chinese",
              "Chaat",
              "Continental"
            ],
            "tags": [
              
            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 6.800000190734863,
            "slugs": {
              "restaurant": "five-star-premium-jakhan-jakhan",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "PARGANA CENTRAL DOON MAUJA JAKHAN, OPP. SCHOLAR HOME SCHOOL, RAJPUR ROAD, DEHRADUN\tDEHRADUN NAGAR NIGAM, DEHRADUN, UTTARAKHAND - 248001",
            "locality": "Rajpur Road",
            "parentId": 80090,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 4200,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 4200,
              "message": "",
              "title": "Delivery Charge",
              "amount": "4200",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6588374~p=10~eid=00000188-2583-8954-5580-6c8000140a17",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "6.8 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "376933",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 6.800000190734863,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "84989",
            "name": "Lemon Chilli Pure Veg Family Restaurant",
            "uuid": "9e84d64c-a4a0-41ee-9904-cc5f78cde951",
            "city": "22",
            "area": "PrinceChowk",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "hcmvabxp9c31a7zq0dgj",
            "cuisines": [
              "North Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "slaString": "18 MINS",
            "lastMileTravel": 1.100000023841858,
            "slugs": {
              "restaurant": "lemon-chilli-pure-veg-family-restaurant-prince-chowk-race-course-dehradun",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Near Prince Chowk, Opposite Jain Dharamshala, Prince Chowk, Dehradun",
            "locality": "Clock Tower",
            "parentId": 8256,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.1 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "84989",
              "deliveryTime": 18,
              "minDeliveryTime": 18,
              "maxDeliveryTime": 18,
              "lastMileTravel": 1.100000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "89064",
            "name": "Ahuja Chinese Food Court",
            "uuid": "79187865-c0b3-463a-b832-d7e3159a6f8a",
            "city": "22",
            "area": "Race Course",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "uvzfjwcslztz1tzjlzfg",
            "cuisines": [
              "Chinese"
            ],
            "tags": [
              
            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "slaString": "18 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
              "restaurant": "ahuja-chinese-food-court-chandan-nagar-race-course-dehradun",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "57/B , Rest Camp, Tyagi Road, Dehradun",
            "locality": "Tyagi Road",
            "parentId": 13607,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "89064",
              "deliveryTime": 18,
              "minDeliveryTime": 18,
              "maxDeliveryTime": 18,
              "lastMileTravel": 1.600000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.5",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "452431",
            "name": "Goli Vada Pav No.1",
            "uuid": "e01e5364-f537-444e-a08b-8f16bba0eb3b",
            "city": "22",
            "area": "Paltan Bazaar",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "jfoez05poyq8xun0n1yw",
            "cuisines": [
              "Maharashtrian",
              "North Indian",
              "Street Food"
            ],
            "tags": [
              
            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "goli-vada-pav-no-1-academy-school-ballupur",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "68 CHAKRATA ROAD, OPP. CHILDRENS,ACADEMY SCHOOL, Dehradun Nagar Nigam,Dehradun, Uttarakhand-248001",
            "locality": "Chakrata Road",
            "parentId": 3998,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6706534~p=13~eid=00000188-2583-8954-5580-6c8100140d2f",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "452431",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 500,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "69062",
            "name": "Naveen Vegetarian (Jhanda Bazar)",
            "uuid": "f2e8b784-af70-464c-a104-7186e6e75207",
            "city": "22",
            "area": "Paltan Bazaar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "trajbpkhdfqf8bee5vvf",
            "cuisines": [
              "Indian",
              "Chinese"
            ],
            "tags": [
              
            ],
            "costForTwo": 27500,
            "costForTwoString": "₹275 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
              "restaurant": "naveen-vegetarian-paltan-bazaar-chukkuwala",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Darshini Gate, Dhamawala Mohalla, Paltan Bazaar, Dehradun",
            "locality": "Arhat Bazaar Road",
            "parentId": 13700,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "69062",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0.4000000059604645,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "74852",
            "name": "Doon Tripple Nine ( Ballupur)",
            "uuid": "9ba5c1c2-5bde-4719-b29a-d11743a794de",
            "city": "22",
            "area": "Krishna Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "p84jrjty8ktstt80fqgh",
            "cuisines": [
              "North Indian",
              "Chinese"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "slaString": "20 MINS",
            "lastMileTravel": 2.799999952316284,
            "slugs": {
              "restaurant": "doon-999-vasant-vihar-kishan-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "899/1, Hotel Ratan Palace, Kaulagarh Road, Near Kishan Nagar Chowk, Krishna Nagar, Dehradun",
            "locality": "Kaulagarh Road",
            "parentId": 74095,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6604377~p=16~eid=00000188-2583-8954-5580-6c8200141075",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "74852",
              "deliveryTime": 20,
              "minDeliveryTime": 20,
              "maxDeliveryTime": 20,
              "lastMileTravel": 2.799999952316284,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        }
      ] 
)

const RestaurantCard = (
    
    {
        cloudinaryImageId,
        name,
        cuisines,
        lastMileTravelString,
    }
    ) => {

    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
            cloudinaryImageId }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{lastMileTravelString}</h3>
            
        </div>
    )
}

const Body = () => {
    return(
        <div className="restaurantCard">
            {
            restaurantList.map((restaurant) =>{
            return <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id}/>
            })
            }
        </div>
    );
}
const Footer = () => {
    return(
        <h1>Footer</h1>
    )
}
const AppLayout = () => (
    <>
    <Header />
    <Body />
    <Footer />
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);