import React from "react";
import { welcome3Img } from "../../assets";
import LayoutWelCome from "../../components/Layout/LayoutWelCome";

const Screen3 = () => {
    return (
        <LayoutWelCome
            imgSrc={welcome3Img}
            total={3}
            order={3}
            title="Orgonaize your tasks"
            desc="You can organize your daily tasks by adding your tasks into separate categories"
        />
    );
};

export default Screen3;
