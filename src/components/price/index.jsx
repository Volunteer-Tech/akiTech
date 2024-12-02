import BreadcrumbFive from "@/src/common/breadcrumbs/breadcrumb-5";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Brand from "../about/brand";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import PlanArea from "./plan-area";
import PriceArea from "./price-area";

const Price = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFive />
            <PriceArea />
            <PlanArea />
            <Brand />
            <TestimonialArea />
            <FaqArea style_service={true}/>
             <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true}/>
        </div>
      </div>
    </>
  );
};

export default Price;
