import React from "react";
import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";

export default function Courses() {
  return (
    <>
      <div className="courses-container">
        {/* Courses row 1 : horizontal scrolling to be added */}

        <div className="courses-row-1">
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
            <CCol xs>
              <CCard className="h-100">
                <CCardImage
                  orientation="top"
                  src="https://i.ytimg.com/vi/rBMLQFf77UM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWdbna79kQ78MRIXcmXV_VoM9y4g"
                />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <small className="text-medium-emphasis">Prof. Alan</small>
                  <CCardText className="truncate-overflow">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100">
                <CCardImage
                  orientation="top"
                  src="https://i.ytimg.com/vi/rBMLQFf77UM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWdbna79kQ78MRIXcmXV_VoM9y4g"
                />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <small className="text-medium-emphasis">Prof. Alan</small>
                  <CCardText className="truncate-overflow">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100">
                <CCardImage
                  orientation="top"
                  src="https://i.ytimg.com/vi/rBMLQFf77UM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWdbna79kQ78MRIXcmXV_VoM9y4g"
                />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <small className="text-medium-emphasis">Prof. Alan</small>
                  <CCardText className="text-overflow-clamp">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>

        {/* Courses row 2 :horizontal scrolling to be added */}

        <div className="courses-row-1 coursesmy-2">
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
            <CCol xs>
              <CCard className="h-100">
                <CCardImage
                  orientation="top"
                  src="https://i.ytimg.com/vi/rBMLQFf77UM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWdbna79kQ78MRIXcmXV_VoM9y4g"
                />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <small className="text-medium-emphasis">Prof. Alan</small>
                  <CCardText className="truncate-overflow">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100">
                <CCardImage
                  orientation="top"
                  src="https://i.ytimg.com/vi/rBMLQFf77UM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWdbna79kQ78MRIXcmXV_VoM9y4g"
                />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <small className="text-medium-emphasis">Prof. Alan</small>
                  <CCardText className="truncate-overflow">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100">
                <CCardImage
                  orientation="top"
                  src="https://i.ytimg.com/vi/rBMLQFf77UM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWdbna79kQ78MRIXcmXV_VoM9y4g"
                />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <small className="text-medium-emphasis">Prof. Alan</small>
                  <CCardText className="text-overflow-clamp">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
      </div>
    </>
  );
}
