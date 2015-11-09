FlowRouter.route("/",{
	name: "Home",
	action(params) {
		// ReactLayout.render(Home);
		renderMainLayoutWith(<Home />);
	}
});

function renderMainLayoutWith(component){
	ReactLayout.render(MainLayout, {
		nav: <Nav />,
		content: component,
		footer: <Footer />
	})
}