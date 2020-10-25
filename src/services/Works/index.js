import { AppServiceRemote, AppServiceFake } from "../appService"
const data = [
	{
		"id": "works",
		"items": [
			{
				"id": "shifting-perspective",
				"category": "Web Design",
				"title": "Shifting Perspective",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/1.jpg"
			},
			{
				"id": "colors-magazine",
				"category": "Web Design",
				"title": "Colors Magazine",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/2.jpg"
			},
			{
				"id": "spa-cosmetics",
				"category": "Developing",
				"title": "Spa Cosmetics",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/3.jpg"
			},
			{
				"id": "riser-coffee",
				"category": "Branding",
				"title": "Riser Coffee",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/4.jpg"
			},
			{
				"id": "dancing-with-myself",
				"category": "Photography",
				"title": "Dancing With Myself",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/5.jpg"
			},
			{
				"id": "new-trends-in-seo",
				"category": "Business",
				"title": "New trends in SEO",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/6.jpg"
			},
			{
				"id": "riser-coffee-2",
				"category": "Branding",
				"title": "Riser Coffee",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/7.jpg"
			},
			{
				"id": "dancing-with-myself-2",
				"category": "Photography",
				"title": "Dancing With Myself",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/8.jpg"
			},
			{
				"id": "new-trends-in-seo-2",
				"category": "Business",
				"title": "New trends in SEO",
				"shortDesc": "Start work with Leaping. Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"fullDesc": "<p>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.<p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p><table width=\"100%\"><tr><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/1.jpg\"/></td><td><img src=\"http://shreethemes.in/leaping/layouts/images/freelancer/3.jpg\" /></td></tr></table><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><p>If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>",
				"client": "Calvin Carlo",
				"location": "3/2/64 Mongus Street, UK",
				"website": "www.yourdomain.com",
				"createdDate": "2019-10-29",
				"active": true,
				"photo": "http://www.shreethemes.in/leaping/layouts/images/freelancer/9.jpg"
			}
		]
	}
];

class WorksServiceBase extends AppServiceRemote {
}

class WorksServiceRemote extends WorksServiceBase {
    constructor() {
        super({ path: '/works' })
    }
}

class WorksServiceFake extends AppServiceFake {
    constructor() {
        super(data)
    }
}

export { WorksServiceBase, WorksServiceRemote, WorksServiceFake }