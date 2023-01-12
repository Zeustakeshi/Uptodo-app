import React from "react";
import { welcome1Img } from "../../assets";
import LayoutWelCome from "../../components/Layout/LayoutWelCome";

const Screen1 = () => {
    return (
        <LayoutWelCome
            imgSrc={welcome1Img}
            total={3}
            order={1}
            title="Manage your tasks"
            desc="You can easily manage all of your daily tasks in DoMe for free"
        />
    );
};

export default Screen1;
