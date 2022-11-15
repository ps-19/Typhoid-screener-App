import { React, useState } from 'react'
import { Helmet } from "react-helmet"
import './Service.css'

function service() {
  var currentTab = 0;
  document.addEventListener("DOMContentLoaded", function (event) {
    showTab(currentTab);
  });
  function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = '<i className="fa fa-angle-double-right"></i>';
    } else {
      document.getElementById("nextBtn").innerHTML = '<i className="fa fa-angle-double-right"></i>';
    }
    fixStepIndicator(n)
  }
  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {

      document.getElementById("nextprevious").style.display = "none";
      document.getElementById("all-steps").style.display = "none";
      document.getElementById("register").style.display = "none";
      document.getElementById("text-message").style.display = "block";




    }
    showTab(currentTab);
  }

  function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
      }


    }
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
  }

  function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <form id="regForm">
              <h1 id="register">Survey Form</h1>
              <div className="all-steps" id="all-steps">
                <span className="step"><i className="fa fa-user"></i></span>
                <span className="step"><i className="fa fa-map-marker"></i></span>
                <span className="step"><i className="fa fa-shopping-bag"></i></span>
                <span className="step"><i className="fa fa-car"></i></span>
                <span className="step"><i className="fa fa-spotify"></i></span>
                <span className="step"><i className="fa fa-mobile-phone"></i></span>
              </div>

              <div className="tab">
                <h6>What's your name?</h6>
                <p>
                  <input placeholder="Name..." onInput={this.className = ''} name="fname" /></p>

              </div>
              <div className="tab">
                <h6>What's your city?</h6>
                <p><input placeholder="City" onInput={this.className = ''} name="dd" /></p>

              </div>
              <div className="tab">
                <h6>What's your Favourite Shopping site?</h6>
                <p><input placeholder="Favourite Shopping site" onInput={this.className = ''} name="email" /></p>

              </div>
              <div className="tab">
                <h6>What's your Favourite car?</h6>
                <p><input placeholder="Favourite car" onInput={this.className = ''} name="uname" /></p>
              </div>

              <div className="tab">
                <h6>What's your Favourite Song?</h6>
                <p><input placeholder="Favourite Song" onInput={this.className = ''} name="uname" /></p>
              </div>


              <div className="tab">
                <h6>What's your Favourite Mobile brand?</h6>
                <p><input placeholder="Favourite Mobile Brand" onInput={this.className = ''} name="uname" /></p>
              </div>
              <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                <h3>Thank you for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
              </div>
              <div id="nextprevious">
                <div>
                  <button type="button" id="prevBtn" onClick={nextPrev(-1)}><i className="fa fa-angle-double-left"></i></button>
                  <button type="button" id="nextBtn" onClick={nextPrev(1)}><i className="fa fa-angle-double-right"></i></button> </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default service