import React, { useState } from 'react'
import {
    Link,
    useParams,
  } from 'react-router-dom';
import CourseDataFagervik from './CourseDataFagervik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRuler, faCircle, faArrowRight, faSquareFull, faMountain } from '@fortawesome/free-solid-svg-icons'

function SingelCourseFagervik() {
    const { slug } = useParams();
    const course = CourseDataFagervik[slug];

    const { lenght, altLenght, par, metersLeft, blackSign, graySign, well, dropZone, mando, stone, ob, src } = course;

    const [count, setCount] = useState(0);

  return (
    <div >
      <div className="course-test-container-info">
      <div className="course-test-info-info">
                  <div className="course-test-image-info">
                      <img src={src} alt="course map" className="course-image-big"/>
                  </div>
                  <div className="course-test-text-info">
                  <div className="course-right-item gray-bg">
                      <div className="course-info-left">
                          <FontAwesomeIcon 
                              icon={faRuler}
                              style={{marginRight: '10px'}}
                          />Längd:</div>
                          <div className="course-info-right">{lenght}m</div>
                      </div>
                      {altLenght === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item gray-bg">
                              <div className="course-info-left">
                              <FontAwesomeIcon 
                                  icon={faRuler}
                                  style={{marginRight: '10px'}}
                              />Alt. Längd:</div>
                              <div className="course-info-right">{altLenght}m</div>
                          </div>
                      )}
                      <div className="course-right-item gray-bg">
                          <div className="course-info-left">Par:</div>
                          <div className="course-info-right">{par}</div>
                      </div>
                      {metersLeft === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item">
                              <div className="course-info-left">
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  size="1x"
                                  style={{color: 'green', marginRight: '10px'}}
                                />Kvar till Korg:</div>
                              <div className="course-info-right">{metersLeft}m</div>
                          </div>
                      )}
                      <div className="course-right-item">
                          <div className="course-info-left">
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  size="2x"
                                  style={{color: 'black'}}
                                />
                          </div>
                          <div className="course-info-right-text">{blackSign}</div>
                      </div>
                      {graySign === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item">
                              <div className="course-info-left">
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  size="2x"
                                  style={{color: 'gray'}}
                                />
                              </div>
                              <div className="course-info-right-text">{graySign}</div>
                          </div>
                      )}
                      {well === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item">
                              <div className="course-info-left">
                              <FontAwesomeIcon
                                  icon={faCircle}
                                  size="2x"
                                  style={{color: 'gray'}}
                                />
                              </div>
                              <div className="course-info-right-text">{well}</div>
                          </div>
                      )}
                      {dropZone === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item">
                              <div className="course-info-left">
                                <FontAwesomeIcon
                                  icon={faSquareFull}
                                  size="2x"
                                  style={{color: 'gray'}}
                                />
                              </div>
                              <div className="course-info-right-text">{dropZone}</div>
                          </div>
                      )}
                      {mando === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item">
                              <div className="course-info-left">
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  size="2x"
                                  style={{color: 'red'}}
                                />
                              </div>
                              <div className="course-info-right-text">{mando}</div>
                          </div>
                      )}
                      {stone === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item">
                              <div className="course-info-left">
                                <FontAwesomeIcon
                                  icon={faMountain}
                                  size="2x"
                                  style={{color: 'gray'}}
                                />
                              </div>
                              <div className="course-info-right-text">{stone}</div>
                          </div>
                      )}
                      {ob === null ? (
                          <div className="course-right-item-hide"></div>
                          ) : (
                          <div className="course-right-item-ob">
                              <div className="course-info-left-ob">OB <span className="course-info-left-ob-b">Regler:</span></div>
                              <div className="course-info-right-ob">{ob}</div>
                          </div>
                      )}
                      <div className="">
                        <Link to={`/fagervik`} style={{ textDecoration: 'none', color: 'white'}}>
                            <div className="btn-more-info">
                                Tillbaka
                            </div>
                        </Link>
                      </div>
                  </div>
              </div>
              <div className="tips-container">
                <div className="tips-wrapper">
                  <button className="noob-tips" onClick={() => setCount(count === 0)}>Nybörjar tips</button>
                  <button className="pro-tips" onClick={() => setCount(count - 1)}>Pro tips</button>
                </div>
                {count < 0 ?(
                  <div className="tips-text">
                    <h1>Avancerade tips kommer snart</h1>
                    <p>Vi jobbar på att lägga in pro tips snart.</p>
                    <p>Har du tips till detta hål? Maila till asd@asd.se</p>
                  </div>
                ) : (
                  <div className="tips-text">
                    <h1>Tips kommer snart</h1>
                    <p>Nybörjartipsen till hålen kommer snart.</p>
                    <p>Har du tips till detta hål? Maila till asd@asd.se</p>
                  </div>
                )}
              </div>
            </div>
    </div>
    );
}

export default SingelCourseFagervik