import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My Mobile number is ${data.phone}. My email is ${data.email}. And here is a message for you: ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>
              <div class="mb-3 ">
                <label for="ExmapleFormControlInput" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="ExmapleFormControlInput"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                  required
                />
              </div>

              <div class="mb-3 ">
                <label for="ExmapleFormControlInput" class="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="ExmapleFormControlInput"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="email@123gmail.com"
                  required
                />
              </div>

              <div class="mb-3 ">
                <label for="ExmapleFormControlInput" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="ExmapleFormControlInput"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div class="mb-3 ">
                <label for="ExmapleFormControlInput" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="ExmapleFormControlInput"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
