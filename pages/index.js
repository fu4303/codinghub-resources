import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from '../components/Layout'
import data from '../data/courses.json'

function Homepage() {
  return (
    <Layout>
      <Grid>
        <Row>
          {data.map(({ title, source, provider }) => (
            <Col md={4}>
              <a href={source} target="_blank" className="source-link">
                {title}

                <div className="provider">
                  {provider}
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Grid>
    </Layout>
  )
}

export default Homepage
