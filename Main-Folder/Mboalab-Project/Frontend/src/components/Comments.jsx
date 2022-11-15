import React from 'react'
import { NavLink } from "react-router-dom"
import Data from './Data-Loading/comment'
import CommentCard from './Data-Loading/CommentCard';
import { Fragment } from 'react';

function renderHere(item) {
 
    return (

        <CommentCard firstname={item.firstname} lastname={item.lastname} email={item.email} comment={item.comment} />

    );
}
function Comments() {
    const URL = "https://typhoid-main.herokuapp.com/"
    const {
        data,
        loading,
    } = Data();
    return (
        <>
            <div className="col-8 mx-auto">
                <div className="row">
                    {loading && <p>Loading the comments.....</p>}

                    {!loading &&
                        <Fragment>
                        <div className="comment-heading">
                            <h6>Racist, sexist, homophobic or generally hate filled comments have no place here.</h6>
                            <p>we recommend you follow this list of <NavLink className="my-link" to="/terms-of-use">guidelines</NavLink></p>
                        </div>
                        <div>
                            {/* {data.map(item => (renderHere(item)))} */}
                        </div>
                        </Fragment>
                    }
                    <div className="my-form">
                        <form id="contact-form" action={`${URL}comments`} method="post" role="form">
                            <div className="controls">
                            <p><b>If you have any query please ask from community.</b></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_name">User Id</label> 
                                            <input id="form_name" type="text" name="firstname" className="form-control" placeholder="Please enter your UserID" data-error="UserID is required." />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_email">Email <span className="sp"> *</span></label>
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_message">Comment <span className="sp"> *</span></label>
                                            <textarea id="form_message" name="comment" className="form-control" placeholder="Write your message here." rows="3" data-error="Please, leave us a comment."></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <input type="submit" className="btn btn-outline-info btn-send  pt-2 btn-block" value="Publish Your Comment" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments