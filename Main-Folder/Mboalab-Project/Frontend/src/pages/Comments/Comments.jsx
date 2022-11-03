import React from 'react'
import { NavLink } from "react-router-dom"
import Data from '../../components/Data-Loading/comment'
import CommentCard from '../../components/Data-Loading/CommentCard';
import './Comments.css';

function renderHere(item) {
    return (

        <CommentCard firstname={item.firstname} lastname={item.lastname} email={item.email} comment={item.comment} />

    );
}
function Comments() {
    const {
        data,
        loading,
    } = Data();
    return (
        <>
            <div className="col-8 mx-auto comments">
                <div className="row">
                    {loading && <p>Loading the comments.....</p>}

                    {!loading &&
                        <>
                            <div className="comment-heading">
                                <h6>Racist, sexist, homophobic or generally hate filled comments have no place here.</h6>
                                <p>we recommend you follow this list of <NavLink className="my-link" to="/terms-of-use"><b>guidelines</b></NavLink></p>
                            </div>
                            <div>
                                {/* {data.map(item => (renderHere(item)))} */}
                            </div>
                        </>
                    }
                    <div className="my-form mt-3">
                        <form id="contact-form" action="/comments" method="post" role="form">
                            <div className="controls">
                                <p><b>If you have any query please ask from community.</b></p>
                                <div className="row">
                                    <div className="col-md-12">
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
                                        <input type="submit" className="btn btn-info btn-send pt-2 btn-block my-4" value="Publish Your Comment" />
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