import React from "react";
import { Image } from "antd";
import 'antd/dist/antd.css'
import './index.css'

export default function Profile() {
    return (
        <>
            <div className="profile_container">
                <div className="profile_div">
                    <Image className="jpg_img" src="Images/linkedInPicKomal.jpg" preview={false} />
                    <label className="label_name"> Komal Wath </label> <br />
                    <label className="label_tag"> Your Friendly Neighbourhood Software Developer </label>
                </div>
            </div>
        </>
    )
}