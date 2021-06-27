import SimpleReactFooter from "simple-react-footer";

// Basic footer template, can be used for any page. The links to the footer options should be modified once those are ready.
// npm SimpleReactFooter is used here. 

function Footer() {
    const columns = [{


        resources: [
            {
                name: "About Us",
                link: "/aboutUs"
            },
            {
                name: "Careers",
                link: "/careers"
            }
        ]
    },
    {

        resources: [
            {
                name: "Privacy Policy",
                link: "/privacyPolicy"
            },
            {
                name: "Terms & Conditions",
                link: "/t&c"
            }
        ]
    },
    {


        resources: [
            {
                name: "Contact Us",
                link: "/contactUs"
            },
            {
                name: "Blog",
                link: "/blog"
            }
        ]
    }
    ]
    return (
        <div className="footer-wrapper">
            <SimpleReactFooter

                columns={columns}
                linkedin="shevalues_linkedin"
                facebook="fshevalues_fb"
                twitter="shevalues_twitter"
                instagram="shevalues_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="shevalues_collections"
                copyright="black"
                iconColor="black"
                backgroundColor="#EEDDE3"
                fontColor="black"
                copyrightColor="darkgrey"
                s
            />
        </div>
    );
}


export default Footer