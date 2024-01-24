'use client'
import MyIframe from "@/components/UI/MyIframe/MyIframe";
import {useSelector} from "react-redux";

const View = () => {

    const {language} = useSelector(state => state.user.user)


    return(
        <div>
          <MyIframe type={'public-offer'} language={language}/>
        </div>
    )
}


export default View