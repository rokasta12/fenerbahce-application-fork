import React from "react";
import { Utility } from "~/pages/Utility";
import { json, LinksFunction, LoaderFunction } from "@remix-run/node";
import carouselStyles from "react-owl-carousel2/lib/styles.css";
import { ProductClient } from "~/client";

export let links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: carouselStyles }];
};



export default () => <Utility />;
