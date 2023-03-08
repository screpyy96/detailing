import { Typography } from "@material-ui/core";
import { ContainerWrapper, ServiciiContainer, ExteriorWrapper, MonthsPlan, MonthItem } from "./mentinere.styled";


const MentinereComponent = ({ data }) => {
    console.log(data.monthsPlan)
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Typography style={{color: "red", padding: "2rem", fontSize: "2rem"}}>{data.title}</Typography>
            </div>
            <ContainerWrapper>
                <ServiciiContainer>
                    <div style={{ paddingTop: "3rem", paddingLeft: "2rem", width: "70%" }}>
                        <h3 >{data.subTitle}</h3>
                        <p>{data.serviceDescription}</p>
                        <br />
                        <p>{data.serviceDescription2}</p>
                        <br />
                        <p>{data.serviceDescription3}</p>
                        <br />
                        <strong>{data.serviceDescription3Bold}</strong>
                    </div>
                    <div >
                        <img src={data.imgPath} alt="mentinere Suceava" />
                    </div>
                </ServiciiContainer>
                <ExteriorWrapper>
                    <Typography>{data.contentTitle}</Typography>
                    <br />
                    <strong>{data.subTitleExterior}</strong>
                    <br />
                    <ul>
                        <li>{data.desc1}</li>
                        <li>{data.desc2}</li>
                        <li>{data.desc3}</li>
                        <li>{data.desc4}</li>
                    </ul>
                    <br />
                    <Typography>{data.subTitleInterior}</Typography>
                    <ul>
                        <li>
                            {data.descInterior}
                        </li>
                        <li>{data.desc2Interior}</li>
                    </ul>
                </ExteriorWrapper>


            </ContainerWrapper>
                <MonthsPlan>
                    {data.planLunar.map((i, title) => {
                        return (
                            <MonthItem key={title}>
                                <h3 style={{color: "red", paddingBottom: "1rem", fontSize: "20px"}}>{i.title}</h3>
                                <p>{i.desc}</p>
                            </MonthItem>
                        );
                    })}
                </MonthsPlan>

        </div>
    )
}

export default MentinereComponent;