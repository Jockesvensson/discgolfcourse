import React from 'react'
import { Link } from 'react-router-dom';
import CourseDataFagervik from './CourseDataFagervik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRuler, faCircle, faArrowRight, faSquareFull, faMountain } from '@fortawesome/free-solid-svg-icons'
import scrollTop from '../ScrollToTop'

function CourseListFagervik() {

    return (
        <div>
        <div className="course-test-container">
          <div className="course-test-wrapper">
            {Object.entries(CourseDataFagervik).map(([slug, { name, lenght, altLenght, par, metersLeft, blackSign, graySign, well, dropZone, mando, stone, ob, image, src }]) => (
              <div key={slug}>
                <div className="course-test-title">{name}</div>
                  <div className="course-test-info">
                    <div className="course-test-image">
                        {/* <img src={temporaryImage} alt="course map" className="course-image"/> */}
                        <img src={src} alt="hej" className="course-image"/>
                    </div>
                    <div className="course-test-text">
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
                            <Link to={`/fagervik/course/${slug}`} style={{ textDecoration: 'none', color: 'white'}} onClick={scrollTop}>
                                <div className="btn-more-info">
                                    Mer info och större bild
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default CourseListFagervik