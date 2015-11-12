FlowRouter.route("/",{
	name: "Home",
	action() {
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