import React from "react";
import { welcome2Img } from "../../assets";
import LayoutWelCome from "../../components/Layout/LayoutWelCome";

const Screen2 = () => {
    return (
        <LayoutWelCome
            imgSrc={welcome2Img}
            total={3}
            order={2}
            title="Create daily routine"
            desc="In Uptodo  you can create your personalized routine to stay productive"
        />
    );
};

export default Screen2;
