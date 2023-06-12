

export const getPlacesData = async (type,sw, ne) =>{
  // const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
  //   try{
  //       const {data: {data}} = await axios.get(URL, {
  //           params: {
  //             bl_latitude: sw.lat,
  //             tr_latitude: ne.lat,
  //             bl_longitude: sw.lng,
  //             tr_longitude: ne.lng,
  //             limit: '30',
  //             currency: 'BRL',
  //             open_now: 'false',
  //             lunit: 'km',
  //             lang: 'pt_BR'
  //           },
  //           headers: {

  //             'X-RapidAPI-Key':process.env.REACT_APP_RAPID_KEY,
  //             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  //           }
  //         })

  //       return data
  //   } catch(e){
  //       console.log(e)
  //   }

  const dadosHoteis = [
    {
        "location_id": "4747377",
        "name": "Hotel Rizzi",
        "latitude": "-29.232906",
        "longitude": "-51.884724",
        "num_reviews": "19",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/f0/ce/56/hotel-rizzi.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/f0/ce/56/hotel-rizzi.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "3972",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/f0/ce/56/hotel-rizzi.jpg",
                    "height": "2012"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/f0/ce/56/hotel-rizzi.jpg",
                    "height": "279"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/f0/ce/56/hotel-rizzi.jpg",
                    "height": "127"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-03-25T19:13:59-0400",
            "caption": "",
            "id": "384880214",
            "helpful_votes": "1",
            "published_date": "2019-03-25T19:13:59-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Lugares para ficar em Encantado",
        "raw_ranking": "3.2137906551361084",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "1",
        "ranking_denominator": "4",
        "ranking_category": "bb",
        "ranking": "1º melhor custo-benefício de 4 lugares para ficar em: Encantado",
        "subcategory_type": "small_hotel",
        "subcategory_type_label": "Hotel de pequeno porte",
        "distance": "0.40046137910835117",
        "distance_string": null,
        "bearing": "northwest",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "R$ 54",
        "hotel_class": "0.0",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "528bb384-9bb2-47db-9d32-d58af7b3e12c",
        "current": null
    },
    {
        "location_id": "2646300",
        "name": "Tri Hotel Encantado",
        "latitude": "-29.23784",
        "longitude": "-51.869377",
        "num_reviews": "47",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/90/b1/2c/fachada.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/90/b1/2c/fachada.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2500",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/90/b1/2c/fachada.jpg",
                    "height": "1667"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/90/b1/2c/fachada.jpg",
                    "height": "367"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/90/b1/2c/fachada.jpg",
                    "height": "167"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-02-23T11:09:01-0500",
            "caption": "Fachada",
            "id": "378581292",
            "helpful_votes": "0",
            "published_date": "2019-02-23T11:09:01-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Lugares para ficar em Encantado",
        "raw_ranking": "3.114706039428711",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "2",
        "ranking_denominator": "4",
        "ranking_category": "bb",
        "ranking": "2º melhor custo-benefício de 4 lugares para ficar em: Encantado",
        "subcategory_type": "small_hotel",
        "subcategory_type_label": "Hotel de pequeno porte",
        "distance": "0.672628197094298",
        "distance_string": null,
        "bearing": "east",
        "rating": "3.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "neighborhood_info": [
            {
                "location_id": "20945095",
                "name": "City Center"
            }
        ],
        "hotel_class": "0.0",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "5a215ff3-c3c3-4bc8-be5d-a492005919c6",
        "current": null
    },
    {
        "location_id": "2663387",
        "name": "Hengu - Hotel e Restaurante",
        "latitude": "-29.22555",
        "longitude": "-51.88921",
        "num_reviews": "14",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/df/07/ae/hengu-hotel.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/df/07/ae/hengu-hotel.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/11/df/07/ae/hengu-hotel.jpg",
                    "height": "683"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/df/07/ae/hengu-hotel.jpg",
                    "height": "366"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/11/df/07/ae/hengu-hotel.jpg",
                    "height": "167"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2018-01-25T11:10:58-0500",
            "caption": "",
            "id": "299829166",
            "helpful_votes": "0",
            "published_date": "2018-01-25T11:10:58-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Lugares para ficar em Encantado",
        "raw_ranking": "3.1444225311279297",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "3",
        "ranking_denominator": "4",
        "ranking_category": "bb",
        "ranking": "3º melhor custo-benefício de 4 lugares para ficar em: Encantado",
        "subcategory_type": "small_hotel",
        "subcategory_type_label": "Hotel de pequeno porte",
        "distance": "0.9721972083150189",
        "distance_string": null,
        "bearing": "northwest",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "hotel_class": "0.0",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "375e515d-975d-4a4f-931b-2f78953adae3",
        "current": null
    },
    {
        "location_id": "2691979",
        "name": "Hotel Turatti",
        "latitude": "-29.25025",
        "longitude": "-51.87304",
        "num_reviews": "8",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/08/0c/90/04/fachada-frontal.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/08/0c/90/04/fachada-frontal.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1681",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/08/0c/90/04/fachada-frontal.jpg",
                    "height": "2048"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/08/0c/90/04/fachada-frontal.jpg",
                    "height": "670"
                },
                "medium": {
                    "width": "369",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/08/0c/90/04/fachada-frontal.jpg",
                    "height": "450"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2015-06-06T15:18:16-0400",
            "caption": "Fachada frontal.",
            "id": "135041028",
            "helpful_votes": "1",
            "published_date": "2015-06-08T06:08:50-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "preferred_map_engine": "default",
        "autobroaden_type": "category_integrated",
        "autobroaden_label": "Lugares para ficar em Encantado",
        "raw_ranking": "3.0709638595581055",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "4",
        "ranking_denominator": "4",
        "ranking_category": "bb",
        "ranking": "4º melhor custo-benefício de 4 lugares para ficar em: Encantado",
        "subcategory_type": "small_hotel",
        "subcategory_type_label": "Hotel de pequeno porte",
        "distance": "0.9980212861337514",
        "distance_string": null,
        "bearing": "southeast",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "hotel_class": "0.0",
        "business_listings": {
            "desktop_contacts": [],
            "mobile_contacts": []
        },
        "special_offers": {
            "desktop": [],
            "mobile": []
        },
        "listing_key": "bcdb70a5-d8a0-4820-86c8-aa087fbda653",
        "current": null
    }
]

  const dadosRestaurantes = [
    {
        "location_id": "25243990",
        "name": "Casa Le Chiavi",
        "latitude": "-29.229946",
        "longitude": "-51.898956",
        "num_reviews": "32",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/4f/e4/cb/caption.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/4f/e4/cb/caption.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/29/4f/e4/cb/caption.jpg",
                    "height": "1365"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/29/4f/e4/cb/caption.jpg",
                    "height": "733"
                },
                "medium": {
                    "width": "338",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/4f/e4/cb/caption.jpg",
                    "height": "450"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2023-05-28T12:38:10-0400",
            "caption": "",
            "id": "693101771",
            "helpful_votes": "0",
            "published_date": "2023-05-28T12:38:10-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.8248131275177",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "1",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 1 de 29 Restaurantes em Encantado",
        "distance": "1.9733288086662109",
        "distance_string": "2 km",
        "bearing": "northwest",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d25243990-Reviews-Casa_Le_Chiavi-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d25243990-Casa_Le_Chiavi-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 99563-9256",
        "website": "http://casalechiavi.com.br/",
        "email": "contato@casalechiavi.com.br",
        "address_obj": {
            "street1": "Estrada São José, 200",
            "street2": "Lagoa Da Garibaldi",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Estrada São José, 200 Lagoa Da Garibaldi, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 690,
                        "close_time": 900
                    }
                ],
                [],
                [],
                [],
                [],
                [],
                [
                    {
                        "open_time": 690,
                        "close_time": 900
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italiana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "24988808",
        "name": "Dona Chica Rs",
        "latitude": "-29.2356",
        "longitude": "-51.87082",
        "num_reviews": "19",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/28/40/8e/07/dona-chica-rs.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/28/40/8e/07/dona-chica-rs.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1200",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/28/40/8e/07/dona-chica-rs.jpg",
                    "height": "1200"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/28/40/8e/07/dona-chica-rs.jpg",
                    "height": "550"
                },
                "medium": {
                    "width": "450",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/28/40/8e/07/dona-chica-rs.jpg",
                    "height": "450"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2023-02-18T08:48:40-0500",
            "caption": "",
            "id": "675319303",
            "helpful_votes": "0",
            "published_date": "2023-02-18T08:48:40-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.48507022857666",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "2",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 2 de 29 Restaurantes em Encantado",
        "distance": "0.9615749200461311",
        "distance_string": "1 km",
        "bearing": "east",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d24988808-Reviews-Dona_Chica_Rs-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d24988808-Dona_Chica_Rs-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 98324-6459",
        "address_obj": {
            "street1": "Rua Sem Denominação, 15",
            "street2": "Morro Dos Calvi",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Sem Denominação, 15 Morro Dos Calvi, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 690,
                        "close_time": 1380
                    }
                ],
                [],
                [],
                [],
                [
                    {
                        "open_time": 1140,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 1140,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italiana"
            },
            {
                "key": "9908",
                "name": "Americana"
            },
            {
                "key": "10348",
                "name": "Brasileira"
            },
            {
                "key": "10749",
                "name": "Sul-americana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "5370700",
        "name": "Bettio's e Lorenzon",
        "latitude": "-29.23961",
        "longitude": "-51.86836",
        "num_reviews": "32",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/0b/b8/fb/f0/panqueca-de-chocolate.jpg",
                    "height": "141"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0b/b8/fb/f0/panqueca-de-chocolate.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2064",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0b/b8/fb/f0/panqueca-de-chocolate.jpg",
                    "height": "1161"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/0b/b8/fb/f0/panqueca-de-chocolate.jpg",
                    "height": "576"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0b/b8/fb/f0/panqueca-de-chocolate.jpg",
                    "height": "309"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2016-06-24T12:31:45-0400",
            "caption": "Panqueca de chocolate",
            "id": "196672496",
            "helpful_votes": "5",
            "published_date": "2016-06-24T12:31:45-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.3091282844543457",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "3",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 3 de 29 Restaurantes em Encantado",
        "distance": "1.205833638747753",
        "distance_string": "1,2 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d5370700-Reviews-Bettio_s_e_Lorenzon-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d5370700-Bettio_s_e_Lorenzon-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "5137513456",
        "address_obj": {
            "street1": "Rua Joao Lucca 1828",
            "street2": "Jd Alvorada",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Joao Lucca 1828 Jd Alvorada, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10348",
                "name": "Brasileira"
            },
            {
                "key": "10749",
                "name": "Sul-americana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "24810948",
        "name": "Churrascaria E Paradouro Cristo",
        "latitude": "-29.233643",
        "longitude": "-51.883156",
        "num_reviews": "7",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/28/d6/7b/7b/caption.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/28/d6/7b/7b/caption.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/28/d6/7b/7b/caption.jpg",
                    "height": "768"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/28/d6/7b/7b/caption.jpg",
                    "height": "413"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/28/d6/7b/7b/caption.jpg",
                    "height": "188"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2023-04-16T10:43:22-0400",
            "caption": "",
            "id": "685144955",
            "helpful_votes": "0",
            "published_date": "2023-04-17T04:39:18-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.2280077934265137",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "4",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 4 de 29 Restaurantes em Encantado",
        "distance": "0.48873672955172753",
        "distance_string": "0,5 km",
        "bearing": "northwest",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Fechado agora",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d24810948-Reviews-Churrascaria_E_Paradouro_Cristo-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d24810948-Churrascaria_E_Paradouro_Cristo-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 98989-8586",
        "email": "churrascariaencantado@outlook.com",
        "address_obj": {
            "street1": "Rod Rs 129",
            "street2": "Bairro Lambari",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "959600000"
        },
        "address": "Rod Rs 129 Bairro Lambari, Encantado, Rio Grande do Sul 959600000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 420,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1080
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10348",
                "name": "Brasileira"
            },
            {
                "key": "10651",
                "name": "Churrasco"
            },
            {
                "key": "10670",
                "name": "Pub"
            },
            {
                "key": "10683",
                "name": "Pub com restaurante"
            },
            {
                "key": "10749",
                "name": "Sul-americana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "2355243",
        "ad_position": "inline1",
        "ad_size": "8X8",
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "detail": "0",
        "page_type": "restaurants",
        "mob_ptype": "app_restaurants"
    },
    {
        "location_id": "15278778",
        "name": "Restaurante Vênetto",
        "latitude": "-29.23738",
        "longitude": "-51.88051",
        "num_reviews": "8",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/28/d6/72/e4/caption.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/28/d6/72/e4/caption.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "850",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/28/d6/72/e4/caption.jpg",
                    "height": "850"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/28/d6/72/e4/caption.jpg",
                    "height": "550"
                },
                "medium": {
                    "width": "450",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/28/d6/72/e4/caption.jpg",
                    "height": "450"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2023-04-16T10:27:37-0400",
            "caption": "",
            "id": "685142756",
            "helpful_votes": "0",
            "published_date": "2023-04-16T12:54:18-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.2254278659820557",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "5",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 5 de 29 Restaurantes em Encantado",
        "distance": "2.1227845793417204E-4",
        "distance_string": "0 m",
        "bearing": "south",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d15278778-Reviews-Restaurante_Venetto-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d15278778-Restaurante_Venetto-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 3751 4691",
        "website": "https://www.facebook.com/restaurante.venetto/",
        "email": "winck6@hotmail.com",
        "address_obj": {
            "street1": "Rua Duque de Caxias 564",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Duque de Caxias 564, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 1050,
                        "close_time": 1320
                    }
                ],
                [],
                [
                    {
                        "open_time": 600,
                        "close_time": 810
                    },
                    {
                        "open_time": 1095,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 810
                    },
                    {
                        "open_time": 1095,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 810
                    },
                    {
                        "open_time": 1095,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 810
                    },
                    {
                        "open_time": 1095,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 810
                    },
                    {
                        "open_time": 1095,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "23808479",
        "name": "Restaurante Lorenzon",
        "latitude": "-29.244629",
        "longitude": "-51.86718",
        "num_reviews": "5",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/ad/2a/a7/culinaria-familiar.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/ad/2a/a7/culinaria-familiar.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1159",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/21/ad/2a/a7/culinaria-familiar.jpg",
                    "height": "1159"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/21/ad/2a/a7/culinaria-familiar.jpg",
                    "height": "550"
                },
                "medium": {
                    "width": "450",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/ad/2a/a7/culinaria-familiar.jpg",
                    "height": "450"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-12-22T11:38:03-0500",
            "caption": "Culinária Familiar",
            "id": "564996775",
            "helpful_votes": "0",
            "published_date": "2021-12-22T11:38:03-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.166238307952881",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "6",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 6 de 29 Restaurantes em Encantado",
        "distance": "1.5253824827337503",
        "distance_string": "1,5 km",
        "bearing": "southeast",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Fechado agora",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d23808479-Reviews-Restaurante_Lorenzon-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d23808479-Restaurante_Lorenzon-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 3751-1682",
        "email": "dianadeconto@hotmail.com",
        "address_obj": {
            "street1": "Rua Coronel Sobral, 2000 - Centro",
            "street2": "Esquina Com A Rua 7 Irmãos",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Coronel Sobral, 2000 - Centro Esquina Com A Rua 7 Irmãos, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italiana"
            },
            {
                "key": "10348",
                "name": "Brasileira"
            },
            {
                "key": "10651",
                "name": "Churrasco"
            },
            {
                "key": "10749",
                "name": "Sul-americana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "7861018",
        "name": "Padaria Alvorada",
        "latitude": "-29.23791",
        "longitude": "-51.86943",
        "num_reviews": "8",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/19/eb/eb/a6/img-20191104-081303199.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/eb/eb/a6/img-20191104-081303199.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1040",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/19/eb/eb/a6/img-20191104-081303199.jpg",
                    "height": "780"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/eb/eb/a6/img-20191104-081303199.jpg",
                    "height": "413"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/19/eb/eb/a6/img-20191104-081303199.jpg",
                    "height": "188"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-11-04T06:16:27-0500",
            "caption": "",
            "id": "434891686",
            "helpful_votes": "1",
            "published_date": "2019-11-04T06:16:27-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0974080562591553",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "7",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 7 de 29 Restaurantes em Encantado",
        "distance": "1.0774707756022825",
        "distance_string": "1,1 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d7861018-Reviews-Padaria_Alvorada-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d7861018-Padaria_Alvorada-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Rua Julio de Castilhos, 835",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Julio de Castilhos, 835, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "14137478",
        "name": "Don Fulano Sorvetes & Cafés",
        "latitude": "-29.237612",
        "longitude": "-51.872417",
        "num_reviews": "4",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/17/2f/ff/f4/don-fulano.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/17/2f/ff/f4/don-fulano.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "960",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/17/2f/ff/f4/don-fulano.jpg",
                    "height": "679"
                },
                "large": {
                    "width": "960",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/17/2f/ff/f4/don-fulano.jpg",
                    "height": "679"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/17/2f/ff/f4/don-fulano.jpg",
                    "height": "389"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-04-16T11:28:28-0400",
            "caption": "Don Fulano",
            "id": "389021684",
            "helpful_votes": "0",
            "published_date": "2019-04-16T11:28:28-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0774362087249756",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "8",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 8 de 29 Restaurantes em Encantado",
        "distance": "0.7861994560707651",
        "distance_string": "0,8 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Aberto agora",
        "is_long_closed": false,
        "price_level": "$",
        "price": "R$ 39 - R$ 59",
        "description": "Criada em encantado em 2018, com a missão de trazer novidades aos seus clientes e gerar uma gastronomia diferenciada e encantadora, a Don Fulano oferece um conceito diferenciado, cujo foco são as taças de sorvete. Além disso oferece também uma variedade de salgados, saladas, hambúrgueres e cafés especiais.",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d14137478-Reviews-Don_Fulano_Sorvetes_Cafes-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d14137478-Don_Fulano_Sorvetes_Cafes-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Restaurante"
            }
        ],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 99468-6514",
        "website": "http://www.facebook.com/DonFulanoSorvetes/",
        "email": "rodrigobandeira18@yahoo.com.br",
        "address_obj": {
            "street1": "Rua Julio de Castilhos 1443",
            "street2": "Sala",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Julio de Castilhos 1443 Sala, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 870,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 870,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 630,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 630,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 630,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 630,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1320
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10348",
                "name": "Brasileira"
            },
            {
                "key": "10749",
                "name": "Sul-americana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "24082953",
        "name": "Amores Livros & Cafés",
        "latitude": "-29.236736",
        "longitude": "-51.872715",
        "num_reviews": "2",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/25/dc/cb/60/livraria.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/25/dc/cb/60/livraria.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "768",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/25/dc/cb/60/livraria.jpg",
                    "height": "1024"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/25/dc/cb/60/livraria.jpg",
                    "height": "733"
                },
                "medium": {
                    "width": "338",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/25/dc/cb/60/livraria.jpg",
                    "height": "450"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2022-09-15T17:54:51-0400",
            "caption": "Livraria",
            "id": "635226976",
            "helpful_votes": "0",
            "published_date": "2022-09-15T17:54:51-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0757265090942383",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "9",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 1 de 1 Café e chá em Encantado",
        "distance": "0.7602257240185208",
        "distance_string": "0,8 km",
        "bearing": "east",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Fechado agora",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d24082953-Reviews-Amores_Livros_Cafes-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d24082953-Amores_Livros_Cafes-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 99582-8394",
        "email": "contato@amoreslivrosecafes.com",
        "address_obj": {
            "street1": "Rua Monsenhor Scalabrini, nº 1063, bairro Centro",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Monsenhor Scalabrini, nº 1063, bairro Centro, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 540,
                        "close_time": 1200
                    }
                ],
                [
                    {
                        "open_time": 840,
                        "close_time": 1140
                    }
                ],
                [
                    {
                        "open_time": 840,
                        "close_time": 1140
                    }
                ],
                [
                    {
                        "open_time": 840,
                        "close_time": 1140
                    }
                ],
                [
                    {
                        "open_time": 840,
                        "close_time": 1200
                    }
                ],
                [
                    {
                        "open_time": 840,
                        "close_time": 1200
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 1200
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10642",
                "name": "Café"
            },
            {
                "key": "10676",
                "name": "Lanchonete"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "9900",
                "name": "Café e chá"
            }
        ],
        "current": null
    },
    {
        "location_id": "4527293",
        "name": "Restaurante E Pizzaria Aquárius",
        "latitude": "-29.23961",
        "longitude": "-51.86836",
        "num_reviews": "6",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.057978630065918",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "10",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 9 de 29 Restaurantes em Encantado",
        "distance": "1.205833638747753",
        "distance_string": "1,2 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "neighborhood_info": [
            {
                "location_id": "20945095",
                "name": "City Center"
            }
        ],
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d4527293-Reviews-Restaurante_E_Pizzaria_Aquarius-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d4527293-Restaurante_E_Pizzaria_Aquarius-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Restaurante"
            }
        ],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "5137513456",
        "address_obj": {
            "street1": "R. João Lucca, 1828",
            "street2": "Centro",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "R. João Lucca, 1828 Centro, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10641",
                "name": "Pizza"
            },
            {
                "key": "10643",
                "name": "Frutos do mar"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "2355243",
        "ad_position": "inline2",
        "ad_size": "8X8",
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "detail": "0",
        "page_type": "restaurants",
        "mob_ptype": "app_restaurants"
    },
    {
        "location_id": "5368454",
        "name": "Piattello",
        "latitude": "-29.24042",
        "longitude": "-51.87135",
        "num_reviews": "6",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.051347494125366",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "11",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 10 de 29 Restaurantes em Encantado",
        "distance": "0.9517472478441601",
        "distance_string": "1 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d5368454-Reviews-Piattello-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d5368454-Piattello-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "5137511291",
        "address_obj": {
            "street1": "Rua Pe Anchieta, 787",
            "street2": "S Francisco",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Pe Anchieta, 787 S Francisco, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italiana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "24160670",
        "name": "Quiero Café",
        "latitude": "-29.23777",
        "longitude": "-51.863873",
        "num_reviews": "5",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/27/c8/5d/86/salgado.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/27/c8/5d/86/salgado.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/27/c8/5d/86/salgado.jpg",
                    "height": "854"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/27/c8/5d/86/salgado.jpg",
                    "height": "683"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/27/c8/5d/86/salgado.jpg",
                    "height": "367"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2023-01-11T15:24:21-0500",
            "caption": "Salgado",
            "id": "667442566",
            "helpful_votes": "0",
            "published_date": "2023-01-11T15:24:21-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.046116828918457",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "12",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 11 de 29 Restaurantes em Encantado",
        "distance": "1.6162078624037917",
        "distance_string": "1,6 km",
        "bearing": "east",
        "rating": "3.5",
        "is_closed": false,
        "open_now_text": "Aberto agora",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d24160670-Reviews-Quiero_Cafe-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d24160670-Quiero_Cafe-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 99842-5600",
        "website": "http://quierocafe.com.br/",
        "address_obj": {
            "street1": "Rua Monsenhor Scalabrini, 1178 - Centro",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Monsenhor Scalabrini, 1178 - Centro, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 900,
                        "close_time": 1140
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10642",
                "name": "Café"
            },
            {
                "key": "10749",
                "name": "Sul-americana"
            },
            {
                "key": "21353",
                "name": "Restaurante com bar"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "6034492",
        "name": "Mordomo Lanches",
        "latitude": "-29.23842",
        "longitude": "-51.87372",
        "num_reviews": "7",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/10/34/9f/33/mordomo-lanches.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/10/34/9f/33/mordomo-lanches.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/10/34/9f/33/mordomo-lanches.jpg",
                    "height": "406"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/10/34/9f/33/mordomo-lanches.jpg",
                    "height": "406"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/10/34/9f/33/mordomo-lanches.jpg",
                    "height": "185"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2017-08-09T10:23:49-0400",
            "caption": "Mordomo Lanches",
            "id": "271884083",
            "helpful_votes": "0",
            "published_date": "2017-08-09T10:23:49-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0411360263824463",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "13",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 12 de 29 Restaurantes em Encantado",
        "distance": "0.669578203929354",
        "distance_string": "0,7 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d6034492-Reviews-Mordomo_Lanches-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d6034492-Mordomo_Lanches-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 3751-3953",
        "website": "https://www.facebook.com/mordomolanches/",
        "address_obj": {
            "street1": "Rua Miguel Luiz Pretto",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Miguel Luiz Pretto, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10640",
                "name": "Bar"
            },
            {
                "key": "10646",
                "name": "Fast food"
            },
            {
                "key": "10670",
                "name": "Pub"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "5767014",
        "name": "Xande Lanches",
        "latitude": "-29.23922",
        "longitude": "-51.86979",
        "num_reviews": "3",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0353283882141113",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "14",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 13 de 29 Restaurantes em Encantado",
        "distance": "1.0610155796283482",
        "distance_string": "1,1 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "neighborhood_info": [
            {
                "location_id": "20945095",
                "name": "City Center"
            }
        ],
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d5767014-Reviews-Xande_Lanches-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d5767014-Xande_Lanches-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Restaurante"
            }
        ],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Rua Tiradentes, 333",
            "street2": "Centro",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Tiradentes, 333 Centro, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "5399452",
        "name": "Marsala",
        "latitude": "-29.23884",
        "longitude": "-51.86245",
        "num_reviews": "1",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0268993377685547",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "15",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 14 de 29 Restaurantes em Encantado",
        "distance": "1.7613335632228873",
        "distance_string": "1,8 km",
        "bearing": "east",
        "rating": "5.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d5399452-Reviews-Marsala-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d5399452-Marsala-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Rua Julio De Castilhos, 1515",
            "street2": "Portao",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Julio De Castilhos, 1515 Portao, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "8176653",
        "name": "Puthukas",
        "latitude": "-29.2444",
        "longitude": "-51.87203",
        "num_reviews": "1",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0219268798828125",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "16",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 15 de 29 Restaurantes em Encantado",
        "distance": "1.135389238153597",
        "distance_string": "1,1 km",
        "bearing": "southeast",
        "rating": "5.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d8176653-Reviews-Puthukas-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d8176653-Puthukas-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Avenida PE Anchieta 1276 Sl 1",
            "street2": "Centro",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": null
        },
        "address": "Avenida PE Anchieta 1276 Sl 1 Centro, Encantado, Rio Grande do Sul Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "2355243",
        "ad_position": "inline3",
        "ad_size": "8X8",
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "detail": "0",
        "page_type": "restaurants",
        "mob_ptype": "app_restaurants"
    },
    {
        "location_id": "4534426",
        "name": "Restaurante Do Parente",
        "latitude": "-29.23788",
        "longitude": "-51.86998",
        "num_reviews": "1",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.0162513256073",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "17",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 16 de 29 Restaurantes em Encantado",
        "distance": "1.0240290576226163",
        "distance_string": "1 km",
        "bearing": "east",
        "rating": "5.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "neighborhood_info": [
            {
                "location_id": "20945095",
                "name": "City Center"
            }
        ],
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d4534426-Reviews-Restaurante_Do_Parente-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d4534426-Restaurante_Do_Parente-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Av. Júlio Castilhos, 234",
            "street2": "Centro",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": null
        },
        "address": "Av. Júlio Castilhos, 234 Centro, Encantado, Rio Grande do Sul Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "15019032",
        "name": "Up Petiscaria",
        "latitude": "-29.23969",
        "longitude": "-51.87021",
        "num_reviews": "2",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.01535701751709",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "18",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 17 de 29 Restaurantes em Encantado",
        "distance": "1.0328688293973254",
        "distance_string": "1 km",
        "bearing": "east",
        "rating": "3.5",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d15019032-Reviews-Up_Petiscaria-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d15019032-Up_Petiscaria-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "51992857931",
        "address_obj": {
            "street1": "R. Tiradentes, 104",
            "street2": "Centro",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "R. Tiradentes, 104 Centro, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 1050,
                        "close_time": 1500
                    }
                ],
                [],
                [],
                [
                    {
                        "open_time": 1050,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 1050,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 1050,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 1050,
                        "close_time": 1500
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "7871136",
        "name": "Restaurante Paladar",
        "latitude": "-29.23851",
        "longitude": "-51.86503",
        "num_reviews": "1",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.010967254638672",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "19",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 18 de 29 Restaurantes em Encantado",
        "distance": "1.5086373064876126",
        "distance_string": "1,5 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d7871136-Reviews-Restaurante_Paladar-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d7871136-Restaurante_Paladar-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Rua Julio de Castilhos, 1263",
            "street2": "Centro",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Julio de Castilhos, 1263 Centro, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "7871132",
        "name": "Aromas Pizzaria E Lancheria",
        "latitude": "-29.24026",
        "longitude": "-51.87268",
        "num_reviews": "1",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.010186195373535",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "20",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 19 de 29 Restaurantes em Encantado",
        "distance": "0.8250918415140062",
        "distance_string": "0,8 km",
        "bearing": "southeast",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d7871132-Reviews-Aromas_Pizzaria_E_Lancheria-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d7871132-Aromas_Pizzaria_E_Lancheria-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Rua Br Do Rio Branco, 607",
            "street2": "Sto Onofre",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Br Do Rio Branco, 607 Sto Onofre, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "4529583",
        "name": "Restaurante Misto Quente",
        "latitude": "-29.2444",
        "longitude": "-51.87203",
        "num_reviews": "1",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "3.006866693496704",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "21",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 20 de 29 Restaurantes em Encantado",
        "distance": "1.135389238153597",
        "distance_string": "1,1 km",
        "bearing": "southeast",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d4529583-Reviews-Restaurante_Misto_Quente-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d4529583-Restaurante_Misto_Quente-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "R. Pe. Anchieta, 1530",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": null
        },
        "address": "R. Pe. Anchieta, 1530, Encantado, Rio Grande do Sul Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "15096350",
        "name": "Restaurante Jinseiko Sushi",
        "latitude": "-29.23914",
        "longitude": "-51.86722",
        "num_reviews": "2",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "raw_ranking": "2.924323797225952",
        "ranking_geo": "Encantado",
        "ranking_geo_id": "2355243",
        "ranking_position": "22",
        "ranking_denominator": "22",
        "ranking_category": "restaurant",
        "ranking": "Nº 21 de 29 Restaurantes em Encantado",
        "distance": "1.305158567370322",
        "distance_string": "1,3 km",
        "bearing": "east",
        "rating": "2.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d15096350-Reviews-Restaurante_Jinseiko_Sushi-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d15096350-Restaurante_Jinseiko_Sushi-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 99849-5402",
        "website": "http://www.facebook.com/jinseikosushi/",
        "email": "jinseikosushi@gmail.com",
        "address_obj": {
            "street1": "Rua Eduardo Satler, 1385",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Eduardo Satler, 1385, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "5473",
                "name": "Japonesa"
            },
            {
                "key": "10653",
                "name": "Sushi"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "25016303",
        "name": "Dona Chica",
        "latitude": "-29.240562",
        "longitude": "-51.879166",
        "num_reviews": "0",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "distance": "0.3777285449786259",
        "distance_string": "0,4 km",
        "bearing": "south",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d25016303-Reviews-Dona_Chica-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d25016303-Dona_Chica-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 98324-6459",
        "address_obj": {
            "street1": "Rua Sem Denominação Sem Numero",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": null
        },
        "address": "Rua Sem Denominação Sem Numero, Encantado, Rio Grande do Sul Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 690,
                        "close_time": 885
                    }
                ],
                [],
                [],
                [],
                [
                    {
                        "open_time": 1170,
                        "close_time": 1425
                    }
                ],
                [
                    {
                        "open_time": 1170,
                        "close_time": 1425
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 885
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italiana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "23407779",
        "name": "No Pão Sanduíches",
        "latitude": "-29.23919",
        "longitude": "-51.87379",
        "num_reviews": "0",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/22/69/1b/1d/area-externa.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/22/69/1b/1d/area-externa.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/69/1b/1d/area-externa.jpg",
                    "height": "960"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/22/69/1b/1d/area-externa.jpg",
                    "height": "413"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/22/69/1b/1d/area-externa.jpg",
                    "height": "188"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2022-03-10T05:54:55-0500",
            "caption": "Área externa",
            "id": "577313565",
            "helpful_votes": "0",
            "published_date": "2022-03-10T05:54:55-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "distance": "0.6828495866455556",
        "distance_string": "0,7 km",
        "bearing": "east",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d23407779-Reviews-No_Pao_Sanduiches-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d23407779-No_Pao_Sanduiches-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+5551999689829",
        "address_obj": {
            "street1": "Rua Sete De Setembro 2600",
            "street2": "Morro Dos Calvi",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Sete De Setembro 2600 Morro Dos Calvi, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [],
                [],
                [],
                [],
                [],
                [
                    {
                        "open_time": 1020,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 1020,
                        "close_time": 1320
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "23922214",
        "name": "Gauss Bier Pub",
        "latitude": "-29.24675",
        "longitude": "-51.872646",
        "num_reviews": "0",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "distance": "1.2926991353648878",
        "distance_string": "1,3 km",
        "bearing": "southeast",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "",
        "description": "Cerveja artesanal, pratos exclusivos, petiscos, hambúrgueres, drink's autorais, ambiente aconchegante.",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d23922214-Reviews-Gauss_Bier_Pub-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d23922214-Gauss_Bier_Pub-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "website": "https://gauss-bier-pub.negocio.site/",
        "address_obj": {
            "street1": "Rua Padre Anchieta, 541 - Santa Clara",
            "street2": "",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua Padre Anchieta, 541 - Santa Clara, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [],
                [],
                [],
                [
                    {
                        "open_time": 1080,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 1080,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 1080,
                        "close_time": 1410
                    }
                ],
                [
                    {
                        "open_time": 990,
                        "close_time": 1410
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "9908",
                "name": "Americana"
            },
            {
                "key": "10347",
                "name": "Alemã"
            },
            {
                "key": "10348",
                "name": "Brasileira"
            },
            {
                "key": "10662",
                "name": "Britânica"
            },
            {
                "key": "10670",
                "name": "Pub"
            },
            {
                "key": "10749",
                "name": "Sul-americana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "11776",
                "name": "Bares e pubs"
            },
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "19092036",
        "name": "Bomba Casa Colonial",
        "latitude": "-29.24847",
        "longitude": "-51.88057",
        "num_reviews": "0",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "distance": "1.234625739086082",
        "distance_string": "1,2 km",
        "bearing": "south",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "R$ 49 - R$ 98",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d19092036-Reviews-Bomba_Casa_Colonial-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d19092036-Bomba_Casa_Colonial-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [
            {
                "key": "cafe",
                "name": "Café"
            }
        ],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "5551982179633",
        "email": "bombassaro6@gmail.com",
        "address_obj": {
            "street1": "RS 332, Km 03, 2656",
            "street2": "Jacarezinho",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "RS 332, Km 03, 2656 Jacarezinho, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italiana"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "24988833",
        "name": "Empório Salgadoce",
        "latitude": "-29.2356",
        "longitude": "-51.87082",
        "num_reviews": "0",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "distance": "0.9615749200461311",
        "distance_string": "1 km",
        "bearing": "east",
        "is_closed": false,
        "open_now_text": "Fechado hoje",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d24988833-Reviews-Emporio_Salgadoce-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d24988833-Emporio_Salgadoce-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+55 51 99702-5475",
        "email": "emporiosalgadoce@gmail.com",
        "address_obj": {
            "street1": "Rua João Sana, 566 - Garagem",
            "street2": "Fundos",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "Rua João Sana, 566 - Garagem Fundos, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 840,
                        "close_time": 1140
                    }
                ],
                [],
                [],
                [],
                [],
                [],
                [
                    {
                        "open_time": 840,
                        "close_time": 1140
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10646",
                "name": "Fast food"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "16556",
                "name": "Lanches rápidos"
            }
        ],
        "current": null
    },
    {
        "location_id": "8235797",
        "name": "Jose Luciano Klunck",
        "latitude": "-29.23651",
        "longitude": "-51.88846",
        "num_reviews": "0",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "distance": "0.7780807146385945",
        "distance_string": "0,8 km",
        "bearing": "west",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d8235797-Reviews-Jose_Luciano_Klunck-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d8235797-Jose_Luciano_Klunck-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Rua Sebastiao Silveira 197",
            "street2": "Lambari",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": null
        },
        "address": "Rua Sebastiao Silveira 197 Lambari, Encantado, Rio Grande do Sul Brasil",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    },
    {
        "location_id": "4530636",
        "name": "Escondidinho Restaurante",
        "latitude": "-29.21758",
        "longitude": "-51.87842",
        "num_reviews": "0",
        "timezone": "America/Sao_Paulo",
        "location_string": "Encantado, Rio Grande do Sul",
        "awards": [],
        "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
        "preferred_map_engine": "default",
        "distance": "2.212539707087972",
        "distance_string": "2,2 km",
        "bearing": "north",
        "is_closed": false,
        "open_now_text": "Fechado agora",
        "is_long_closed": false,
        "price_level": "",
        "description": "",
        "web_url": "https://www.tripadvisor.com.br/Restaurant_Review-g2355243-d4530636-Reviews-Escondidinho_Restaurante-Encantado_State_of_Rio_Grande_do_Sul.html",
        "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d4530636-Escondidinho_Restaurante-Encantado_State_of_Rio_Grande_do_Sul.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "Cidade"
                    }
                ],
                "name": "Encantado",
                "abbrv": null,
                "location_id": "2355243"
            },
            {
                "subcategory": [
                    {
                        "key": "state",
                        "name": "Estado"
                    }
                ],
                "name": "Rio Grande do Sul",
                "abbrv": "RS",
                "location_id": "303530"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "País"
                    }
                ],
                "name": "Brasil",
                "abbrv": null,
                "location_id": "294280"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurante"
        },
        "subcategory": [],
        "parent_display_name": "Encantado",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "R Professor Dias da Rocha 811",
            "street2": "Meireles",
            "city": "Encantado",
            "state": "RS",
            "country": "Brasil",
            "postalcode": "95960-000"
        },
        "address": "R Professor Dias da Rocha 811 Meireles, Encantado, Rio Grande do Sul 95960-000 Brasil",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 660,
                        "close_time": 900
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 900
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 900
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 900
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 900
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 900
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 900
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1500
                    }
                ]
            ],
            "timezone": "America/Sao_Paulo"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurantes"
            }
        ],
        "current": null
    }
]

const dadosAtracoes=[
  {
      "location_id": "12342461",
      "name": "Igreja Matriz São Pedro",
      "latitude": "-29.23705",
      "longitude": "-51.86928",
      "num_reviews": "17",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/4c/da/7f/igreja-em-encantado-rs.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/4c/da/7f/igreja-em-encantado-rs.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "2560",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-c/2560x500/0f/4c/da/7f/igreja-em-encantado-rs.jpg",
                  "height": "1920"
              },
              "large": {
                  "width": "550",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/da/7f/igreja-em-encantado-rs.jpg",
                  "height": "413"
              },
              "medium": {
                  "width": "250",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/4c/da/7f/igreja-em-encantado-rs.jpg",
                  "height": "188"
              }
          },
          "is_blessed": true,
          "uploaded_date": "2017-05-17T15:30:55-0400",
          "caption": "IGREJA EM ENCANTADO RS",
          "id": "256694911",
          "helpful_votes": "7",
          "published_date": "2017-05-17T15:30:55-0400",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "raw_ranking": "2.9708926677703857",
      "ranking_geo": "Encantado",
      "ranking_geo_id": "2355243",
      "ranking_position": "1",
      "ranking_denominator": "12",
      "ranking_category": "attraction",
      "ranking_subcategory": "Nº 1 de 12 atividades em: Encantado",
      "subcategory_ranking": "Nº 1 de 12 atividades em: Encantado",
      "ranking": "Nº 1 de 12 atividades em: Encantado",
      "distance": "1.0909058709998134",
      "distance_string": "1,1 km",
      "bearing": "east",
      "rating": "5.0",
      "is_closed": false,
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d12342461-Reviews-Igreja_Matriz_Sao_Pedro-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d12342461-Igreja_Matriz_Sao_Pedro-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "47",
              "name": "Pontos turísticos"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "5137511127",
      "website": "http://pt-br.facebook.com/Par%C3%B3quia-S%C3%A3o-Pedro-Encantado-RS-480422212070568/",
      "address_obj": {
          "street1": "Rua Monsenhor Scalabrini",
          "street2": "",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Rua Monsenhor Scalabrini, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "10",
              "name": "Locais religiosos e sagrados"
          },
          {
              "key": "175",
              "name": "Igrejas e catedrais"
          }
      ],
      "current": null
  },
  {
      "location_id": "4376344",
      "name": "Museu Municipal Encantado",
      "latitude": "-29.23788",
      "longitude": "-51.86998",
      "num_reviews": "13",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/08/0d/b4/eb/parte-externa-do-museu.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/08/0d/b4/eb/parte-externa-do-museu.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "2048",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-o/08/0d/b4/eb/parte-externa-do-museu.jpg",
                  "height": "1365"
              },
              "large": {
                  "width": "1024",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-w/08/0d/b4/eb/parte-externa-do-museu.jpg",
                  "height": "682"
              },
              "medium": {
                  "width": "550",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/08/0d/b4/eb/parte-externa-do-museu.jpg",
                  "height": "367"
              }
          },
          "is_blessed": true,
          "uploaded_date": "2015-06-07T09:37:55-0400",
          "caption": "Parte externa do museu.",
          "id": "135116011",
          "helpful_votes": "1",
          "published_date": "2015-06-07T09:37:55-0400",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "raw_ranking": "2.8344547748565674",
      "ranking_geo": "Encantado",
      "ranking_geo_id": "2355243",
      "ranking_position": "3",
      "ranking_denominator": "12",
      "ranking_category": "attraction",
      "ranking_subcategory": "Nº 3 de 12 atividades em: Encantado",
      "subcategory_ranking": "Nº 3 de 12 atividades em: Encantado",
      "ranking": "Nº 3 de 12 atividades em: Encantado",
      "distance": "1.0240290576226163",
      "distance_string": "1 km",
      "bearing": "east",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "neighborhood_info": [
          {
              "location_id": "20945095",
              "name": "City Center"
          }
      ],
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d4376344-Reviews-Encantado_Municipal_Museum-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d4376344-Encantado_Municipal_Museum-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "49",
              "name": "Museus"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "email": "educacao@encantadors.com",
      "address_obj": {
          "street1": "Avenida Julio de Castilho, 1.448",
          "street2": "Centro",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Avenida Julio de Castilho, 1.448 Centro, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "161",
              "name": "Museus especializados"
          }
      ],
      "current": null
  },
  {
      "location_id": "12381789",
      "name": "Praça Matriz Muçum",
      "latitude": "-29.22897",
      "longitude": "-51.88218",
      "num_reviews": "7",
      "timezone": "America/Sao_Paulo",
      "location_string": "Muçum, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/2b/d8/e5/praca-matriz-de-mucum.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/2b/d8/e5/praca-matriz-de-mucum.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "888",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/2b/d8/e5/praca-matriz-de-mucum.jpg",
                  "height": "666"
              },
              "large": {
                  "width": "550",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/2b/d8/e5/praca-matriz-de-mucum.jpg",
                  "height": "412"
              },
              "medium": {
                  "width": "250",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/2b/d8/e5/praca-matriz-de-mucum.jpg",
                  "height": "188"
              }
          },
          "is_blessed": true,
          "uploaded_date": "2017-05-03T19:00:23-0400",
          "caption": "Praça Matriz de Muçum: chafariz",
          "id": "254531813",
          "helpful_votes": "0",
          "published_date": "2017-05-03T19:00:23-0400",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "raw_ranking": "2.807861566543579",
      "ranking_geo": "Muçum",
      "ranking_geo_id": "5569971",
      "ranking_position": "4",
      "ranking_denominator": "7",
      "ranking_category": "attraction",
      "ranking_subcategory": "Nº 4 de 7 atividades em: Muçum",
      "subcategory_ranking": "Nº 4 de 7 atividades em: Muçum",
      "ranking": "Nº 4 de 7 atividades em: Muçum",
      "distance": "0.9496898018486228",
      "distance_string": "0,9 km",
      "bearing": "north",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g5569971-d12381789-Reviews-Praca_Matriz_Mucum-Mucum_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g5569971-d12381789-Praca_Matriz_Mucum-Mucum_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Muçum",
              "abbrv": null,
              "location_id": "5569971"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "47",
              "name": "Pontos turísticos"
          }
      ],
      "parent_display_name": "Muçum",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "website": "http://www.mucum-rs.com.br/municipio/atracoes-turisticas",
      "address_obj": {
          "street1": "Praca Liberdade",
          "street2": "",
          "city": "Muçum",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95970-000"
      },
      "address": "Praca Liberdade, Muçum, Rio Grande do Sul 95970-000 Brasil",
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "163",
              "name": "Pontos de interesse"
          },
          {
              "key": "26",
              "name": "Monumentos e estátuas"
          },
          {
              "key": "13",
              "name": "Chafarizes"
          }
      ],
      "current": null
  },
  {
      "location_id": "12381769",
      "name": "Praça Centenário",
      "latitude": "-29.23723",
      "longitude": "-51.8682",
      "num_reviews": "4",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/2b/d9/e1/praca-centenario-monumento.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/2b/d9/e1/praca-centenario-monumento.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "888",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/2b/d9/e1/praca-centenario-monumento.jpg",
                  "height": "666"
              },
              "large": {
                  "width": "550",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/2b/d9/e1/praca-centenario-monumento.jpg",
                  "height": "412"
              },
              "medium": {
                  "width": "250",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/2b/d9/e1/praca-centenario-monumento.jpg",
                  "height": "188"
              }
          },
          "is_blessed": true,
          "uploaded_date": "2017-05-03T19:03:01-0400",
          "caption": "Praça Centenário: monumento ao imigrante",
          "id": "254532065",
          "helpful_votes": "2",
          "published_date": "2017-05-03T19:03:01-0400",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "raw_ranking": "2.74031662940979",
      "ranking_geo": "Encantado",
      "ranking_geo_id": "2355243",
      "ranking_position": "8",
      "ranking_denominator": "12",
      "ranking_category": "attraction",
      "ranking_subcategory": "Nº 8 de 12 atividades em: Encantado",
      "subcategory_ranking": "Nº 8 de 12 atividades em: Encantado",
      "ranking": "Nº 8 de 12 atividades em: Encantado",
      "distance": "1.1956189738739877",
      "distance_string": "1,2 km",
      "bearing": "east",
      "rating": "3.5",
      "is_closed": false,
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d12381769-Reviews-Praca_Centenario-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d12381769-Praca_Centenario-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "47",
              "name": "Pontos turísticos"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "5137510100",
      "website": "http://www.encantado-rs.com.br/site/galerias.php",
      "address_obj": {
          "street1": "Rua Monsenhor Scalabrini 718",
          "street2": "",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Rua Monsenhor Scalabrini 718, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "163",
              "name": "Pontos de interesse"
          },
          {
              "key": "26",
              "name": "Monumentos e estátuas"
          }
      ],
      "current": null
  },
  {
      "location_id": "15700282",
      "name": "Pórtico de Encantado",
      "latitude": "-29.25025",
      "longitude": "-51.87304",
      "num_reviews": "3",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/09/c9/fa/portico-de-encantado.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/09/c9/fa/portico-de-encantado.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "1280",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/09/c9/fa/portico-de-encantado.jpg",
                  "height": "1087"
              },
              "large": {
                  "width": "530",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/09/c9/fa/portico-de-encantado.jpg",
                  "height": "450"
              },
              "medium": {
                  "width": "241",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/09/c9/fa/portico-de-encantado.jpg",
                  "height": "205"
              }
          },
          "is_blessed": true,
          "uploaded_date": "2019-01-10T02:23:33-0500",
          "caption": "Pórtico de Encantado",
          "id": "369740282",
          "helpful_votes": "2",
          "published_date": "2019-01-10T02:23:33-0500",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "raw_ranking": "2.761547803878784",
      "ranking_geo": "Encantado",
      "ranking_geo_id": "2355243",
      "ranking_position": "6",
      "ranking_denominator": "12",
      "ranking_category": "attraction",
      "ranking_subcategory": "Nº 6 de 12 atividades em: Encantado",
      "subcategory_ranking": "Nº 6 de 12 atividades em: Encantado",
      "ranking": "Nº 6 de 12 atividades em: Encantado",
      "distance": "1.605816217028439",
      "distance_string": "1,6 km",
      "bearing": "southeast",
      "rating": "3.5",
      "is_closed": false,
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d15700282-Reviews-Portico_de_Encantado-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d15700282-Portico_de_Encantado-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "47",
              "name": "Pontos turísticos"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "address_obj": {
          "street1": "Rua Anchieta",
          "street2": "",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Rua Anchieta, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "3",
              "name": "Obras arquitetônicas"
          },
          {
              "key": "163",
              "name": "Pontos de interesse"
          }
      ],
      "current": null
  },
  {
      "location_id": "23633746",
      "name": "Santuário Nossa Senhora De Fátima.",
      "latitude": "-29.23843",
      "longitude": "-51.87675",
      "num_reviews": "2",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/25/29/23/7b/santuario-de-fatima.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/25/29/23/7b/santuario-de-fatima.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "1200",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-o/25/29/23/7b/santuario-de-fatima.jpg",
                  "height": "1600"
              },
              "large": {
                  "width": "338",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/25/29/23/7b/santuario-de-fatima.jpg",
                  "height": "450"
              },
              "medium": {
                  "width": "154",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/25/29/23/7b/santuario-de-fatima.jpg",
                  "height": "205"
              }
          },
          "is_blessed": false,
          "uploaded_date": "2022-08-11T15:39:43-0400",
          "caption": "Santuário de Fátima",
          "id": "623453051",
          "helpful_votes": "0",
          "published_date": "2022-08-11T15:39:43-0400",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "raw_ranking": "2.7826287746429443",
      "ranking_geo": "Encantado",
      "ranking_geo_id": "2355243",
      "ranking_position": "4",
      "ranking_denominator": "12",
      "ranking_category": "attraction",
      "ranking_subcategory": "Nº 4 de 12 atividades em: Encantado",
      "subcategory_ranking": "Nº 4 de 12 atividades em: Encantado",
      "ranking": "Nº 4 de 12 atividades em: Encantado",
      "distance": "0.3832631478032137",
      "distance_string": "0,4 km",
      "bearing": "east",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d23633746-Reviews-Santuario_Nossa_Senhora_De_Fatima-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d23633746-Santuario_Nossa_Senhora_De_Fatima-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "47",
              "name": "Pontos turísticos"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "address_obj": {
          "street1": "Rs-129 - Lajeadinho, Encantado - Rs, 95960-000",
          "street2": "",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Rs-129 - Lajeadinho, Encantado - Rs, 95960-000, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "175",
              "name": "Igrejas e catedrais"
          }
      ],
      "current": null
  },
  {
      "location_id": "2355243",
      "ad_position": "inline1",
      "ad_size": "8X8",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "detail": "0",
      "page_type": "attractions",
      "mob_ptype": "app_attractions"
  },
  {
      "location_id": "25150518",
      "name": "Cia do Jardim",
      "latitude": "-29.234219",
      "longitude": "-51.88265",
      "num_reviews": "1",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/27/1d/47/a7/caption.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/27/1d/47/a7/caption.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "1134",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-o/27/1d/47/a7/caption.jpg",
                  "height": "850"
              },
              "large": {
                  "width": "550",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/27/1d/47/a7/caption.jpg",
                  "height": "412"
              },
              "medium": {
                  "width": "250",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/27/1d/47/a7/caption.jpg",
                  "height": "187"
              }
          },
          "is_blessed": false,
          "uploaded_date": "2022-11-30T09:24:54-0500",
          "caption": "",
          "id": "656230311",
          "helpful_votes": "0",
          "published_date": "2022-11-30T09:24:54-0500",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "raw_ranking": "2.768752098083496",
      "ranking_geo": "Encantado",
      "ranking_geo_id": "2355243",
      "ranking_position": "1",
      "ranking_denominator": "2",
      "ranking_category": "attraction",
      "ranking_subcategory": "Nº 1 de 2 Compras em: Encantado",
      "subcategory_ranking": "Nº 1 de 2 Compras em: Encantado",
      "ranking": "Nº 1 de 2 Compras em: Encantado",
      "distance": "0.4083768903824719",
      "distance_string": "0,4 km",
      "bearing": "northwest",
      "rating": "5.0",
      "is_closed": false,
      "open_now_text": "Fechado agora",
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d25150518-Reviews-Cia_do_Jardim-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d25150518-Cia_do_Jardim-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "26",
              "name": "Compras"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+55 51 99920-7204",
      "website": "https://www.ciadojardim.com.br/",
      "email": "floricultura@ciadojardim.com.br",
      "address_obj": {
          "street1": "Rs-129, Km 72, 5925",
          "street2": "",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Rs-129, Km 72, 5925, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "hours": {
          "week_ranges": [
              [
                  {
                      "open_time": 810,
                      "close_time": 1080
                  }
              ],
              [
                  {
                      "open_time": 780,
                      "close_time": 1110
                  }
              ],
              [
                  {
                      "open_time": 780,
                      "close_time": 1110
                  }
              ],
              [
                  {
                      "open_time": 780,
                      "close_time": 1110
                  }
              ],
              [
                  {
                      "open_time": 780,
                      "close_time": 1110
                  }
              ],
              [
                  {
                      "open_time": 450,
                      "close_time": 1110
                  }
              ],
              [
                  {
                      "open_time": 480,
                      "close_time": 1110
                  }
              ]
          ],
          "timezone": "America/Sao_Paulo"
      },
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "144",
              "name": "Lojas especializadas e de suvenir"
          }
      ],
      "current": null
  },
  {
      "location_id": "25169768",
      "name": "Jardim Dos Sentidos",
      "latitude": "-29.2356",
      "longitude": "-51.87082",
      "num_reviews": "0",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/27/1d/3b/00/o-jardim-dos-sentidos.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/27/1d/3b/00/o-jardim-dos-sentidos.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "1280",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/27/1d/3b/00/o-jardim-dos-sentidos.jpg",
                  "height": "960"
              },
              "large": {
                  "width": "550",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/27/1d/3b/00/o-jardim-dos-sentidos.jpg",
                  "height": "412"
              },
              "medium": {
                  "width": "250",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/27/1d/3b/00/o-jardim-dos-sentidos.jpg",
                  "height": "187"
              }
          },
          "is_blessed": false,
          "uploaded_date": "2022-11-30T08:39:14-0500",
          "caption": "O Jardim dos Sentidos é um jardim sensorial aberto ao público.",
          "id": "656227072",
          "helpful_votes": "0",
          "published_date": "2022-11-30T08:39:14-0500",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "distance": "0.9615749200461311",
      "distance_string": "1 km",
      "bearing": "east",
      "is_closed": false,
      "open_now_text": "Fechado hoje",
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d25169768-Reviews-Jardim_Dos_Sentidos-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d25169768-Jardim_Dos_Sentidos-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "57",
              "name": "Natureza e parques"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+55 51 99596-3079",
      "address_obj": {
          "street1": "Rs 129",
          "street2": "Km 72",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Rs 129 Km 72, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "hours": {
          "week_ranges": [
              [
                  {
                      "open_time": 810,
                      "close_time": 1110
                  }
              ],
              [],
              [],
              [],
              [],
              [
                  {
                      "open_time": 810,
                      "close_time": 1110
                  }
              ],
              [
                  {
                      "open_time": 810,
                      "close_time": 1110
                  }
              ]
          ],
          "timezone": "America/Sao_Paulo"
      },
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "58",
              "name": "Jardins"
          }
      ],
      "current": null
  },
  {
      "location_id": "23560983",
      "name": "Giardino Benedetto - Empório 53",
      "latitude": "-29.23582",
      "longitude": "-51.89044",
      "num_reviews": "0",
      "timezone": "America/Sao_Paulo",
      "location_string": "Encantado, Rio Grande do Sul",
      "photo": {
          "images": {
              "small": {
                  "width": "150",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-l/1d/a0/96/2c/caption.jpg",
                  "height": "150"
              },
              "thumbnail": {
                  "width": "50",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-t/1d/a0/96/2c/caption.jpg",
                  "height": "50"
              },
              "original": {
                  "width": "1280",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/a0/96/2c/caption.jpg",
                  "height": "958"
              },
              "large": {
                  "width": "550",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-s/1d/a0/96/2c/caption.jpg",
                  "height": "411"
              },
              "medium": {
                  "width": "250",
                  "url": "https://media-cdn.tripadvisor.com/media/photo-f/1d/a0/96/2c/caption.jpg",
                  "height": "187"
              }
          },
          "is_blessed": false,
          "uploaded_date": "2021-08-18T20:37:04-0400",
          "caption": ".",
          "id": "497063468",
          "helpful_votes": "0",
          "published_date": "2021-08-18T20:37:04-0400",
          "user": {
              "user_id": null,
              "member_id": "0",
              "type": "user"
          }
      },
      "awards": [],
      "location_subtype": "none",
      "doubleclick_zone": "sa.brazil.state_of_rio_grande_do_sul",
      "preferred_map_engine": "default",
      "distance": "0.9801388478976973",
      "distance_string": "1 km",
      "bearing": "west",
      "is_closed": false,
      "open_now_text": "Fechado hoje",
      "is_long_closed": false,
      "description": "",
      "web_url": "https://www.tripadvisor.com.br/Attraction_Review-g2355243-d23560983-Reviews-Emporio_53-Encantado_State_of_Rio_Grande_do_Sul.html",
      "write_review": "https://www.tripadvisor.com.br/UserReview-g2355243-d23560983-Emporio_53-Encantado_State_of_Rio_Grande_do_Sul.html",
      "ancestors": [
          {
              "subcategory": [
                  {
                      "key": "city",
                      "name": "Cidade"
                  }
              ],
              "name": "Encantado",
              "abbrv": null,
              "location_id": "2355243"
          },
          {
              "subcategory": [
                  {
                      "key": "state",
                      "name": "Estado"
                  }
              ],
              "name": "Rio Grande do Sul",
              "abbrv": "RS",
              "location_id": "303530"
          },
          {
              "subcategory": [
                  {
                      "key": "country",
                      "name": "País"
                  }
              ],
              "name": "Brasil",
              "abbrv": null,
              "location_id": "294280"
          }
      ],
      "category": {
          "key": "attraction",
          "name": "Atração"
      },
      "subcategory": [
          {
              "key": "57",
              "name": "Natureza e parques"
          }
      ],
      "parent_display_name": "Encantado",
      "is_jfy_enabled": false,
      "nearest_metro_station": [],
      "phone": "+55 51 99729-3794",
      "website": "http://www.instagram.com/emporio53rs/",
      "email": "emporio53rs@gmail.com",
      "address_obj": {
          "street1": "Rua Verona 15",
          "street2": "Travessa Padova",
          "city": "Encantado",
          "state": "RS",
          "country": "Brasil",
          "postalcode": "95960-000"
      },
      "address": "Rua Verona 15 Travessa Padova, Encantado, Rio Grande do Sul 95960-000 Brasil",
      "hours": {
          "week_ranges": [
              [
                  {
                      "open_time": 840,
                      "close_time": 1140
                  }
              ],
              [],
              [],
              [],
              [],
              [],
              [
                  {
                      "open_time": 840,
                      "close_time": 1140
                  }
              ]
          ],
          "timezone": "America/Sao_Paulo"
      },
      "is_candidate_for_contact_info_suppression": false,
      "subtype": [
          {
              "key": "58",
              "name": "Jardins"
          }
      ],
      "current": null
  }
]

  switch(type){
    case 'restaurants':
    return dadosRestaurantes
    
    case 'hotels':
    return dadosHoteis
    
    case 'attractions':
    return dadosAtracoes
    
    default:
      return dadosRestaurantes
  }

}