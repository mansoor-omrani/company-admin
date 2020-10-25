import { AppServiceRemote, AppServiceFake } from "../appService"
const data = [
	{
		"id": "carousel",
		"items": [
			{
				"title": "VR-based Cognitive Assessment and Rehabilitation",
				"description": "",
				"icon": "ti-eye text-white",
				"picture": "/images/carousel/01.jpg",
				"button": {
					"text": "Get Started",
					"icon": "mdi mdi-chevron-right",
					"className": "btn btn-primary mt-2",
					"link": ""
				}
			},
			{
				"title": "Unleash Creativity in Business",
				"description": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"icon": "ti-bar-chart text-white",
				"picture": "/images/business/02.jpg",
				"button": {
					"text": "Documentation",
					"icon": "mdi mdi-bookmark",
					"className": "btn btn-outline-primary mt-2",
					"link": ""
				}
			},
			{
				"title": "Start Your Business With Leaping",
				"description": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"icon": "ti-ruler-pencil text-white",
				"picture": "/images/business/03.jpg",
				"button": {
					"text": "Contact us",
					"icon": "mdi mdi-phone",
					"className": "btn btn-primary mt-2",
					"link": ""
				}
			}
		]
	}
];

class CarouselServiceBase extends AppServiceRemote {
}

class CarouselServiceRemote extends CarouselServiceBase {
    constructor() {
        super({ path: '/carousel' })
    }
}

class CarouselServiceFake extends AppServiceFake {
    constructor() {
        super(data)
    }
}

export { CarouselServiceBase, CarouselServiceRemote, CarouselServiceFake }