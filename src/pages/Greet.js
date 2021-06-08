import React from "react";
import TextImage from "../components/TextImage";
import Hero from "../components/Hero";
import Section from "../components/Section";

const Greet = () => {
  return (
    <article>
      <Hero title="Increase onsite traffic flow and engagement with Kindly’s conversational commerce platform" />
      <Section
        theme="white"
        title="Transform online shopping into conversational commerce and boost your revenue"
        intro="Healthy conversation translates generic purchases into shopping experiences. Our conversational commerce platform enables personalised meet and greets, just like an in-store customer service representative. How do you build trust and buying intent with shoppers? You break the ice and build a connection with one-to-one dialogue, which in turn converts online browsing into purchases."
      ></Section>
      <TextImage />
    </article>
  );
};

export default Greet;
