const routes = {
    home: "/",
    category: "/category/@:name",
    tag: "/tag/@:name",
    comic: "/comic/@:name",
    episode: "/comic/@:name&:order",
    chapter: "/comic/@:name&:order&:order",
    profile: "/@:nickname",
    upload: "/upload",
    search: "/search",
    privacy_policy: "/privacy-policy"
};

export default routes;