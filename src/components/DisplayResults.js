import React, { useState, useContext } from "react";
import { Col } from "react-bootstrap";
import { ColStyled } from "../styles/StyledComponents";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CardView from "./CardView";
import ListTable from "./ListTable";
import ModalComponent from "./ModalComponent";
import { useStoreActions, useStoreState } from "easy-peasy";
import { AppContext } from "../App";
import { CardViewSkeleton, ListSkeleton } from "./Skeletons";
import Alert from "react-bootstrap/Alert";
import meme from "../images/meme.png";
import Card from "react-bootstrap/Card";

const DisplayResults = () => {
  const [showDetails, setShowDetails] = useState(false);
  const cardView = useStoreState(state => state.cardView);
  const setCardView = useStoreActions(actions => {
    return actions.setCardView;
  });
  const { loading, data, showFavs } = useContext(AppContext);

  return (
    <>
      <Row>
        <Col
          md={4}
          style={{
            margin: "auto auto auto auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={"Card view"}
              checked={cardView}
              onChange={() => {
                // console.warn(cardView);
                setCardView(!cardView);
              }}
            />
          </Form>
        </Col>
      </Row>
      {cardView ? (
        <Row>
          <ColStyled
            md={10}
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent:
                !data || window.innerWidth < 599 ? "center" : "space-between",
            }}
          >
            {(data?.Response === "True" || showFavs) && !loading && (
              <CardView setShowDetails={setShowDetails} />
            )}
            {!data && !showFavs && !loading && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card style={{ width: "18rem", marginTop: "4vh" }}>
                  <Card.Body>
                    <Card.Img src={meme} />
                    <Card.Text style={{ textAlign: "center" }}>
                      Please search if you want to see results
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )}
            {loading && (
              <>
                <CardViewSkeleton />
                <CardViewSkeleton />
                <CardViewSkeleton />
              </>
            )}
            {data?.Response === "False" && !showFavs && !loading && (
              <Alert variant="danger">
                {data.Error?.toLowerCase() === "movie not found!"
                  ? "No results were found, please try again!"
                  : data.Error}
              </Alert>
            )}
          </ColStyled>
        </Row>
      ) : (
        <Row>
          <ColStyled className="py-2" md={10}>
            {!data ||
              (!data && !showFavs && !loading && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card style={{ width: "18rem", marginTop: "4vh" }}>
                    <Card.Body>
                      <Card.Img src={meme} />
                      <Card.Text style={{ textAlign: "center" }}>
                        Please search if you want to see results
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            {data?.Response === "True" ||
              (showFavs && !loading && (
                <ListTable
                  headings={["Poster", "Title", "Type", "Year"]}
                  setShowDetails={setShowDetails}
                />
              ))}
            {loading && <ListSkeleton />}
            {data?.Response === "False" && !showFavs && !loading && (
              <Alert variant="danger">
                {data.Error?.toLowerCase() === "movie not found!"
                  ? "No results were found, please try again!"
                  : data.Error}
              </Alert>
            )}
          </ColStyled>
        </Row>
      )}
      {showDetails && (
        <ModalComponent
          movieObj={showDetails}
          setShowDetails={setShowDetails}
          closeHandler={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default DisplayResults;
