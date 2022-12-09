import { Fragment  } from 'react';
import Image from 'next/image'
import Link from 'next/link'




function ProductDetail(props) {

    //props.webSiteList

    return (
        <Fragment>
            <h1>{ props.name }</h1>
        </Fragment>
    );
}



export default ProductDetail;