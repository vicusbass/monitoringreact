FlowRouter.route("/",{
	name: "Home",
	action() {
		// ReactLayout.render(Home);
		renderMainLayoutWith(<Table />);
	}
});

function renderMainLayoutWith(component){
	ReactLayout.render(MainLayout, {
		nav: <Nav />,
		content: component,
		footer: <Footer />
	})
}