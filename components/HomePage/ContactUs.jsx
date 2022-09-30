import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

/* custom imports */
import topLeft from "../../public/grafterrImage/contactUsSvg/topLeft.svg";
import bottomLeft from "../../public/grafterrImage/contactUsSvg/bottomLeft.svg";
import topRight from "../../public/grafterrImage/contactUsSvg/contactUsTopRight.svg";
import centerLeft from "../../public/grafterrImage/contactUsSvg/centerLeft.svg";
import bottomRight from "../../public/grafterrImage/contactUsSvg/bottomRight.svg";
// import { Cookies } from 'next/dist/server/web/spec-extension/cookies';
// import btnIcon from '../public/grafterrImage/contactUsSvg/submitButton.svg'

const ContactUs = ({ ip }) => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSuccessResponse = (e) => {
    console.log(e);

    setTimeout(() => {
      setSuccess(false);
      e.target.reset();
    }, 2000);
  };

  async function onSubmit(data, e) {
    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: data.email,
          name: data.FullName,
          phone: data.phone,
          businessName: data.BusinessName,
          subject: "Customer queries",
          message: data.Message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      console.log(res.status, data);
      onSuccessResponse(e);

      // const resDatabase = await fetch('https://dev.eposhybrid.com/contact/Contact/grafter_in_form', {
      const resDatabase = await fetch(
        "https://dev.eposhybrid.com/contact/Contact/grafter_in_form",
        {
          body: JSON.stringify({
            name: data.FullName,
            email_id: data.email,
            phone_number: data.phone,
            business_name: data.BusinessName,
            message: data.Message,
            ip_address: ip,
            resource: "Grafterr website",
          }),
          headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          method: "POST",
        }
      );

      // const resData = await resDatabase.json();
      // console.log(resData)
      // console.log(resDatabase)
      if (res.status === 200 && resDatabase.status === 200) {
        setSuccess(true);
        onSuccessResponse(e);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div
      className="contactUsContainer flex justify-center items-center w-full h-screen"
      id="contactUsSection"
    >
      <div className="contactUsTopLeftSvgContainer">
        <Image src={topLeft} alt="background icons"></Image>
      </div>
      <div className="contactUstopRightSvgContainer">
        <Image src={topRight} alt="background icons"></Image>
      </div>
      <div className="contactUsbottomLeftSvgContainer">
        <Image src={bottomLeft} alt="background icons"></Image>
      </div>
      <div className="contactUsbottomRightSvgContainer">
        <Image src={bottomRight} alt="background icons"></Image>
      </div>
      <div className="contactUscenterLeftSvgContainer">
        <Image src={centerLeft} alt="background icons"></Image>
      </div>
      <div className="contactUsSubContainer flex flex-col items-center justify-center md:w-3/5  lg:w-3/5  xl:w-1/2 h-3/4">
        <div className="contactUsTitle flex flex-col justify-center items-center mb-7 sm:mb-14">
          <h3 className="contactUsTitle">We are here to help</h3>
          <span className="contactUsCaption">
            Speak to our friendly team today
          </span>
        </div>

        <div className="contactFormContainer flex flex-col">
          <form
            className="m-auto myform"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              <div className="input-holder sm:mr-2 my-1 sm:my-2">
                <input
                  className="input border  p-3"
                  type="text"
                  placeholder="Joanne Smith"
                  name="name"
                  {...register("FullName", { required: true })}
                />
                <div className="placeholder">Full name</div>
                {/* <p className={errors.FullName ? 'block':'hidden'}>Please check the First Name</p> */}
                {errors.FullName && (
                  <p className="errorMessage">Please enter your full name</p>
                )}
              </div>
              <div className="input-holder sm:ml-2 my-1 sm:my-2">
                <input
                  className="input border  p-3"
                  type="phone"
                  placeholder="07123456789"
                  name="Phone"
                  {...register("phone", { required: true })}
                />
                <div className="placeholder">Phone number</div>
                {/* <p className={errors.phone ? 'block':'hidden'}>Please check the First Name</p> */}
                {errors.phone && (
                  <p className="errorMessage">
                    Please enter a valid phone number
                  </p>
                )}
              </div>
              <div className="input-holder sm:mr-2 my-1 sm:my-2">
                <input
                  className="input border  p-3"
                  type="text"
                  placeholder="Your business name here"
                  name="Business name"
                  {...register("BusinessName", { required: true })}
                />
                <div className="placeholder">Business name</div>
                {/* <p className={errors.BusinessName ? 'block':'hidden'}>Please check the First Name</p> */}
                {errors.BusinessName && (
                  <p className="errorMessage">
                    Please enter your business name
                  </p>
                )}
              </div>
              <div className="input-holder sm:ml-2 my-1 sm:my-2">
                <input
                  className="input border  p-3"
                  type="text"
                  placeholder="example@mail.co.uk"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <div className="placeholder">Email address</div>
                {/* <p className={errors.email ? 'block':'hidden'}>Please check the First Name</p> */}
                {errors.email && (
                  <p className="errorMessage">Please enter a valid email</p>
                )}
              </div>
            </div>
            <span
              className="mb-2"
              style={{ fontWeight: "400", fontSize: "16px", color: "#454545" }}
            >
              How can we help?
            </span>
            <textarea
              className="contactUsTextArea my-3 w-full"
              rows="5"
              placeholder="Please enter your message here"
              name="message"
              {...register("Message", { required: true })}
            ></textarea>
            {errors.Message && (
              <p className="errorMessage">Please add your message here</p>
            )}
            <div className="contactUsTermsAndCondition flex flex-col">
              <div className="contactUsTermsAndPrivacy">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="termsAndCondition"
                    {...register("Terms", { required: true })}
                  />
                  <label htmlFor="termsAndCondition">
                    I agree to the processing and sharing of my personal data as
                    required to use the Grafterr Service and as outlined within
                    the{" "}
                    <span className="termsAndConditionLink">
                      <Link href="/">Terms and Conditions</Link>
                    </span>{" "}
                    and{" "}
                    <span className="termsAndConditionLink">
                      <Link href="/">Privacy Policy </Link>
                    </span>
                    .
                  </label>
                </div>
              </div>
              <div className="contactUsUpdateAndNews">
                <div className="checkbox-group">
                  <input type="checkbox" id="newsUpdatesCheckox" />
                  <label htmlFor="newsUpdatesCheckox">
                    I would like to stay up to date with Grafterr’s latest news
                    and offers and agree to recieve any updates and newsletter.
                  </label>
                </div>
              </div>
            </div>
            <button className="contactUsSubmitBtn flex p-3 mt-2">
              <svg
                className="mr-3"
                width="21"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0125 0.1962C23.8382 0.077414 23.6341 0.00979142 23.4234 0.000985331C23.2126 -0.00782076 23.0036 0.0425413 22.82 0.146371L1.06813 12.5203C0.696132 12.7359 0.476382 13.139 0.502023 13.5656C0.527663 13.9933 0.794242 14.37 1.18921 14.5354L8.37515 17.5533V22.8736C8.37515 23.2852 8.60001 23.663 8.96109 23.8608C9.12969 23.9531 9.31251 24 9.45782 24C9.66951 24 9.88148 23.9399 10.0667 23.8213L15.2792 20.4716L19.8992 22.4122C20.0372 22.4702 20.1854 22.5 20.335 22.5001C20.5262 22.5001 20.7166 22.4518 20.8872 22.3551C21.0366 22.2711 21.1648 22.154 21.2619 22.0128C21.359 21.8715 21.4224 21.71 21.4474 21.5404L24.4474 1.2904C24.5516 0.864356 24.3641 0.43934 24.0125 0.1962ZM17.8109 5.58748L9.04063 15.3797L4.16704 13.3453L17.8109 5.58748ZM10.5828 20.8125V18.4987L12.7602 19.4133L10.5828 20.8125ZM19.475 19.7765L11.1969 16.2989L21.725 4.60357L19.475 19.7765Z"
                  fill="#F0F0F0"
                />
              </svg>
              {/* <Image src={btnIcon} className="mr-2" alt="button icon" ></Image> */}
              Send message
            </button>
            <br />
            {errors.Terms && (
              <p className="errorMessage">
                Please indicate that you accept the Terms and Conditions
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
