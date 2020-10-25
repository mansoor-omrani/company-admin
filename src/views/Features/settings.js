const COLS_TITLE_DESC = [
    { name: "title", title: "Title" },
    { name: "description", title: "Description", gridExclude: true }
];
const COLS_TITLE_PICTURE_DESC = [
    ...COLS_TITLE_DESC,
    { name: "picture", title: "Picture", dataType: 'image' }
];
const COLS_TITLE_PICTURE_DESC_LINK = [
    ...COLS_TITLE_PICTURE_DESC,
    { name: "link", title: "Link" }
];
const COLS_TITLE_ICON_DESC = [
    ...COLS_TITLE_DESC,
    { name: "icon", title: "Icon" }
];
const COLS_TITLE_ICON_DESC_LINK = [
    ...COLS_TITLE_ICON_DESC,
    { name: "link", title: "Link" }
];
const COLS_TEXT_ICON_CLASS_LINK = [
    { name: "text", title: "Text"},
    { name: "icon", title: "Icon"},
    { name: "className", title: "Css Class" },
    { name: "link", title: "Link" }
];
const COLS_TITLE_DESC_PICTURE_LINK = [
    ...COLS_TITLE_DESC,
    { name: "picture", title: "Picture", dataType: 'image' },
    { name: "link", title: "Link" }
];

const SETTINGS = {
    'accordion': {
        itemsEditMode: 'popup',
        title: 'Accordion',
        columns: [
            ...COLS_TITLE_DESC_PICTURE_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_DESC,
                    { name: "name", title: "Name" },
                    { name: "text", title: "Text" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-6': {
        itemsEditMode: 'popup',
        title: 'Tiles 6',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-6-2': {
        itemsEditMode: 'popup',
        title: 'Tiles 6 (version 2)',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC_LINK,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-6-freelancer': {
        itemsEditMode: 'popup',
        title: 'Tiles 6 (Freelancer)',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC_LINK,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'property-listing': {
        itemsEditMode: 'popup',
        title: 'Property Listing',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [ 
                    { name: "title",	   title: "Title" },
                    { name: "name",        title: "Name" },
                    { name: "location",    title: "Location" },
                    { name: "picture",     title: "Picture", dataType: 'image' },
                    { name: "price",       title: "Price" },
                    { name: "currency",    title: "Currency" },
                    { name: "phone",       title: "Phone" },
                    { name: "link",        title: "Link" },
                    { name: "url",         title: "Url" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'our-profitability': {
        itemsEditMode: 'inline',
        title: 'Our Profitiability',
        columns: [
            ...COLS_TITLE_PICTURE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [ 
                    { name: "title",	title: "Title" },
                    { name: "number",	title: "Number" },
                    { name: "type",		title: "Type" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-3': {
        itemsEditMode: 'popup',
        title: 'Tiles 3',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_PICTURE_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-3-2': {
        itemsEditMode: 'popup',
        title: 'Tiles 3 (version 2)',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "link", title: "Link" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-3-3': {
        itemsEditMode: 'popup',
        title: 'Tiles 3 (version 3)',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "text", title: "Text" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_PICTURE_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-3-4': {
        itemsEditMode: 'popup',
        title: 'Tiles 3 (version 4)',
        columns: [
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-3-5': {
        itemsEditMode: 'popup',
        title: 'Tiles 3 (version 5)',
        columns: [
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'tiles-4': {
        itemsEditMode: 'popup',
        title: 'Tiles 4',
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'build-beatiful-applications': {
        itemsEditMode: 'inline',
        title: 'Build Beautiful Applications',
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    { name: "title", title: "Title" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'housing-service': {
        itemsEditMode: 'inline',
        title: 'Housing Service',
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    { name: "title", title: "Title" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'build-beatiful-software': {
        itemsEditMode: 'inline',
        title: 'Build Beautiful Software',
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    { name: "title", title: "Title" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'my-experience': {
        itemsEditMode: 'popup',
        title: 'My Experience',
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    { name: "title", title: "Title" },
                    { name: "subTitle", title: "SubTitle" },
                    { name: "text", title: "Text" },
                    { name: "description", title: "Description" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'great-service-providers': {
        itemsEditMode: 'popup',
        title: 'Great Service Providers (Part 1)',
        columns: [
            ...COLS_TITLE_PICTURE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: [
                    { name: "text", title: "Text" },
                    { name: "className", title: "Css Class" },
                    { name: "link", title: "Link" }
                ]
            },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'great-service-providers-part2': {
        itemsEditMode: 'popup',
        title: 'Great Service Providers (Part 2)',
        columns: [
            { name: "picture", title: "Picture", dataType: 'image' },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: [
                    { name: "text", title: "Text" },
                    { name: "className", title: "Css Class" },
                    { name: "link", title: "Link" }
                ]
            },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'a-few-parameters': {
        itemsEditMode: 'popup',
        title: 'A Few Parameters',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_PICTURE_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
                    {
                        name: "button",
                        title: "Button",
                        columns: [
                            { name: "text", title: "Text" },
                            { name: "className", title: "Css Class" },
                            { name: "link", title: "Link" }
                        ]
                    }
                ]
            }
        ]
    },
    'less-workings': {
        itemsEditMode: 'inline',
        title: 'Less Workings',
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    { name: "title", title: "Title" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'our-creative-minds': {
        itemsEditMode: 'popup',
        title: 'Our Creative Minds',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'our-dream-team': {
        itemsEditMode: 'popup',
        title: 'Our Dream Team',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'our-team-members': {
        itemsEditMode: 'popup',
        title: 'Our Team Members',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'portfolio-1': {
        itemsEditMode: 'popup',
        title: 'Portfolio 1',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'portfolio-2': {
        itemsEditMode: 'popup',
        title: 'Portfolio 2',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'testimonials-agency': {
        itemsEditMode: 'popup',
        title: 'Testimonial (Agency)',
        columns: [ 
            { name: "picture",			title: "Picture", dataType: 'image' },
            { name: "className",        title: "ClassName" },
            { name: "speed",            title: "Speed" },
            { name: "buttonClassName",  title: "ButtonClassName" },
            { name: "hidden",           title: "Hidden" }
        ]
    },
    'testimonials-application': {
        itemsEditMode: 'popup',
        title: 'Testimonial (Application)',
        columns: [ 
            { name: "picture",			title: "Picture", dataType: 'image' },
            { name: "className",        title: "ClassName" },
            { name: "speed",            title: "Speed" },
            { name: "buttonClassName",  title: "ButtonClassName" },
            { name: "hidden",           title: "Hidden" }
         ]
    },
    'testimonials-property': {
        itemsEditMode: 'popup',
        title: 'Testimonial (Property)',
        columns: [ 
            { name: "picture",			title: "Picture", dataType: 'image' },
            { name: "className",        title: "ClassName" },
            { name: "speed",            title: "Speed" },
            { name: "buttonClassName",  title: "ButtonClassName" },
            { name: "hidden",           title: "Hidden" }
         ]
    },
    'sale-and-buy': {
        itemsEditMode: 'popup',
        title: 'Sale & Buy',
        columns: [ 
            { name: "title",		title: "Title" },
            { name: "picture",      title: "Picture", dataType: 'image' },
            { name: "tags",         title: "Tags" },
            { name: "description",  title: "Description" },
            { name: "link",         title: "Link" },
            { name: "hidden",       title: "Hidden" }
         ]
    },
    'comming-soon': {
        itemsEditMode: 'popup',
        title: 'Comming Soon',
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'form-signup-news-letter': {
        itemsEditMode: 'popup',
        title: 'Form Signup News Letter',
        columns: [ 
            { name: "title",		title: "Title" },
            { name: "subTitle",     title: "SubTitle" },
            { name: "description",  title: "Description" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
         ]
    },
    'the-first-software': {
        itemsEditMode: 'popup',
        title: 'The First Software',
        columns: [ 
            { name: "title",		title: "Title" },
            { name: "description",  title: "Description" },
            { name: "picture",      title: "Picture", dataType: 'image' },
            { name: "altPicture",   title: "AltPicture" },
            { name: "video",        title: "Video" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
         ]
    },
    'get-the-app': {
        itemsEditMode: 'popup',
        formItemsEditMode: 'popup',
        title: 'Get The App',
        columns: [
            { name: "title",		title: "Title" },
            { name: "description",  title: "Description" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "form",
                title: "Form",
                columns: [
                    {
                        name: "items",
                        title: "Items",
                        columns: [
                            { name: "type",	title: "Type" },
                            { name: "text", title: "Text" },
                            { name: "icon", title: "Icon" },
                            { name: "link", title: "Link" },
                            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                        ]
                    }
                ]
            }
        ]
    },
    'see-our-customers': {
        itemsEditMode: 'popup',
        formItemsEditMode: 'popup',
        title: 'See Our Customers',
        columns: [ 
            { name: "title",		title: "Title" },
            { name: "number",       title: "Number" },
            { name: "count",        title: "Count" },
            { name: "description",  title: "Description" },
            { name: "hidden",       title: "Hidden" },
            {
                name: "form",
                title: "Form",
                columns: [
                    {
                        name: "items",
                        title: "Items",
                        columns: [
                            { name: "type",	title: "Type" },
                            { name: "text", title: "Text" },
                            { name: "className", title: "Css Class" },
                            { name: "link", title: "Link" },
                            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                        ]
                    }
                ]
            }
         ]
    },
    'freelancer-top': {
        itemsEditMode: 'popup',
        formItemsEditMode: 'popup',
        title: 'Home Freelancer Top Section',
        columns: [ 
            { name: "title",		title: "Title" },
            { name: "subTitle",     title: "SubTitle" },
            { name: "description",  title: "Description" },
            { name: "picture",      title: "Picture", dataType: 'image' },
            { name: "photo",        title: "Photo", gridExclude: true },
            { name: "link",         title: "Link" },
            { name: "hidden",       title: "Hidden" },
            {
                name: "form",
                title: "Form",
                columns: [
                    {
                        name: "items",
                        title: "Items",
                        columns: [
                            { name: "type",	title: "Type" },
                            { name: "text", title: "Text" },
                            { name: "className", title: "Css Class" },
                            { name: "link", title: "Link" },
                            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                        ]
                    }
                ]
            }
         ]
    },
    'startup-project': {
        itemsEditMode: 'popup',
        title: 'Home Startup',
        columns: [
            ...COLS_TITLE_PICTURE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'counters': {
        itemsEditMode: 'popup',
        title: 'Counters',
        columns: [
            { name: "picture", title: "Picture", dataType: 'image' },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: [ 
                    { name: "title",	title: "Title" },
                    { name: "icon",     title: "Icon" },
                    { name: "number",   title: "Number" },
                    { name: "count",    title: "Count" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                 ]
            }
        ]
    },
    'get-ready': {
        itemsEditMode: 'popup',
        title: 'Get Ready',
        columns: [
            ...COLS_TITLE_PICTURE_DESC,
            { name: "photo", title: "Photo", dataType: 'image' },
            { name: "video", title: "Video", gridExclude: true },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'ready-to-start': {
        itemsEditMode: 'popup',
        title: 'Ready to Start',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'ready-to-start-2': {
        itemsEditMode: 'popup',
        title: 'Ready to Start (version 2)',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: [
                    { name: "text",		title: "Text" },
                    { name: "icon",     title: "Icon" },
                    { name: "className",title: "ClassName" },
                    { name: "dataset",  title: "Dataset" }
                ]
            }
        ]
    },
    'our-story': {
        itemsEditMode: 'popup',
        title: 'Out Story',
        columns: [
            ...COLS_TITLE_DESC_PICTURE_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
        ]
    },
    'do-you-have-question': {
        itemsEditMode: 'popup',
        title: 'Do You Have a Question',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: [
                    { name: "text",		title: "Text" },
                    { name: "icon",     title: "Icon" },
                    { name: "className",title: "ClassName" },
                    { name: "link",     title: "Link" }
                ]
            }
        ]
    },
    'home-top': {
        itemsEditMode: 'popup',
        title: 'Home Top',
        columns: [
            ...COLS_TITLE_PICTURE_DESC,
            { name: "text", title: "Text" },
            { name: "hot", title: "Hot" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: [
                    { name: "title",	title: "Title" },
                    { name: "text",		title: "Text" },
                    { name: "icon",     title: "Icon" },
                    { name: "className",title: "ClassName" },
                    { name: "link",     title: "Link" }
                ]
            }
        ]
    },
    'what-we-offer': {
        itemsEditMode: 'popup',
        title: 'What We Offer',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_PICTURE_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'who-we-are': {
        itemsEditMode: 'popup',
        title: 'Who We Are',
        columns: [
            ...COLS_TITLE_PICTURE_DESC,
            { name: "video", title: "Video" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'start-building': {
        itemsEditMode: 'popup',
        title: 'Start Building',
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'start-building-websites': {
        columns: [
            { name: "title", title: "Title" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'less-workings-more-sales': {
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    { name: "title", title: "Title" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'creative-thinkers': {
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'forget-about-limits': {
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "text", title: "Text" },
            { name: "video", title: "Video" },
            { name: "tags", title: "Tags" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'take-control-of-your-business': {
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'great-app': {
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "photo", title: "Photo", dataType: 'image' },
            { name: "altPhoto", title: "Alternate Photo", gridExclude: true },
            { name: "video", title: "Video" },
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "button",
                title: "Button",
                columns: COLS_TEXT_ICON_CLASS_LINK
            }
        ]
    },
    'see-everything': {
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "form",
                title: "Form",
                columns: [
                    {
                        name: "items",
                        title: "Items",
                        columns: [
                            { name: "type",		title: "Type" },
                            { name: "text",     title: "Text" },
                            { name: "className",title: "ClassName" },
                            { name: "link",     title: "Link" },
                            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                        ]
                    }
                ]
            }
        ]
    },
    'lets-get-started': {
        columns: [
            ...COLS_TITLE_PICTURE_DESC_LINK,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "form",
                title: "Form",
                columns: [
                    {
                        name: "items",
                        title: "Items",
                        columns: [
                            { name: "type",		title: "Type" },
                            { name: "text",     title: "Text" },
                            { name: "className",title: "ClassName" },
                            { name: "link",     title: "Link" },
                            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                        ]
                    }
                ]
            }
        ]
    },
    'page-infos': {
        itemsEditMode: 'navigate',
        title: 'Pages Header Information',
        columns: [
            {
                name: "items",
                title: "Items",
                columns: COLS_TITLE_PICTURE_DESC
            }
        ]
    },
    'about-info': {
        title: 'Page > About : Info',
        backToParent: true,
        columns: COLS_TITLE_PICTURE_DESC
    },
    'services-info': { columns: COLS_TITLE_PICTURE_DESC },
    'blog-info': { columns: COLS_TITLE_PICTURE_DESC },
    'team-info': { columns: COLS_TITLE_PICTURE_DESC },
    'pricing-info': { columns: COLS_TITLE_PICTURE_DESC },
    'works-info': { columns: COLS_TITLE_PICTURE_DESC },
    'case-study-info': { columns: COLS_TITLE_PICTURE_DESC },
    'contact-info': { columns: COLS_TITLE_PICTURE_DESC },
    'support-info': { columns: COLS_TITLE_PICTURE_DESC },
    'account-login-info': { columns: COLS_TITLE_PICTURE_DESC },
    'account-register-info': { columns: COLS_TITLE_PICTURE_DESC },
    'account-forgot-password-info': { columns: COLS_TITLE_PICTURE_DESC },
    'account-reset-password-info': { columns: COLS_TITLE_PICTURE_DESC },
    'account-activate-email-info': { columns: COLS_TITLE_PICTURE_DESC },
    'services': {
        columns: [
            ...COLS_TITLE_DESC,
            { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_ICON_DESC,
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' }
                ]
            }
        ]
    },
    'carousel': {
        title: 'Carousel',
        columns: [
            {
                name: "items",
                title: "Items",
                columns: [
                    ...COLS_TITLE_PICTURE_DESC,
                    { name: "icon", title: "Icon" },
                    { name: "hidden", title: "Hidden" , dataType: 'boolean', icon: 'model-icon pe-7s-check' },
                    {
                        name: "button",
                        title: "Button",
                        columns: COLS_TEXT_ICON_CLASS_LINK
                    }
                ]
            }
        ]
    }
}

export default SETTINGS;