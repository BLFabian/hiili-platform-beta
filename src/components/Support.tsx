import Card from "./Card";
import Question from "./Question";
import { FaPlusCircle } from "react-icons/fa";

/* THIS COMPONENT IS PRETTY MUCH ENTIRELY PLACEHOLDER AND MOCK-UP*/

function Support() {
  return (
    <>
      {" "}
      <div className="supportContainer contentContainer">
        <Card
          size="massive"
          type="support"
          subtype="Frequently asked questions"
          explainer={true}
          view="support"
        >
          {" "}
          <div className="questionsWrapper">
            <div className="questionsContainer">
              <Question
                question={
                  <span>
                    How is CO<sub>2</sub> calculated?
                  </span>
                }
                answer={
                  <span>
                    <span>
                      To get the most accurate carbon calculations, we have
                      developed a method to estimate actual power consumed per
                      device. This method takes into account CPU, device model,
                      creative weight, connection speed, creative contents, the
                      placement, the publisher, and most things that can affect
                      exactly how much battery is drained for the creative to be
                      loaded and presented. Each impression is subsequently
                      measured against tens of thousands of real life creatives
                      and their carbon performance. For more information, read
                      our
                    </span>
                    <span> </span>
                    <a
                      target="_blank"
                      href="https://ieeexplore.ieee.org/abstract/document/10154177"
                    >
                      initial research article
                    </a>
                    <span> </span>
                    <span>on the subject.</span>
                  </span>
                }
              ></Question>
              <Question
                question={
                  <span>How do digital devices emit carbon dioxide?</span>
                }
                answer={
                  <span>
                    Digital devices themselves do not directly emit carbon
                    dioxide. Instead, the CO<sub>2</sub> emissions associated
                    with digital devices stem from the electricity they consume,
                    which is often generated through methods that release carbon
                    dioxide into the atmosphere per objective metric.
                  </span>
                }
              ></Question>
              <Question
                question={
                  <span>
                    How do I calculate the carbon efficiency of a campaign?
                  </span>
                }
                answer={
                  <span>
                    Carbon efficiency is a subjective metric, unless a KPI has
                    been specified. As KPIs can vary from conversions, clicks,
                    leads, awereness to attention, we do not calculate it as
                    part of our base-line metrics. If, however, you feed KPI
                    data into our platform, and tag it as such, we can give you
                    a Hiili Grade and a CO<sub>2</sub> per objective metric.
                  </span>
                }
              ></Question>
              <Question
                question={
                  "How is the energy mix of a geolocation factored into the calculations?"
                }
                answer={
                  "Hiili keeps an up-to-date index of the amount of energy in a given power grid stems from renewable sources. Based on this, we will know the percentage of non-renewable energy powering each device connected to, or charged through, the power grid."
                }
              ></Question>
              <Question
                question={
                  "How do I optimize a campaign to reduce the amount of emissions?"
                }
                answer={
                  "In every detailed creative report, you will see a list of suggestions, based on device-level data on each creative impression. For more specific suggestions on workflows, tools, formats and types, reach out!"
                }
              ></Question>
            </div>
            <div className="contactContainer">
              <div className="contactText">Reach out to us at any time!</div>
              <a className="contactText" href="mailto:help@hiili.org">
                ✉️ help@hiili.org
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Support;
