import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'react-google-charts';
import { summaryOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import styled, { css } from 'styled-components'

const DashboardContainer = styled.div `
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.summary > li {
  border: 0.1rem #c0c0c0 solid;
  margin: 2rem;
  border-radius: 0.5rem;
  flex: 1 1 20rem;
}
.summary-title {
  font-size: 2rem;
  padding: 1rem;
}
.summary-body {
  font-size: 4rem;
  padding: 1rem;
  text-align: center;
}

.summary-title.color1 {
  background-color: #f0e0e0;
}
.summary-title.color2 {
  background-color: #e0f0e0;
}
.summary-title.color3 {
  background-color: #e0e0f0;
}

padding-top:2rem;
h1{
  font-weight: 900;
  font-size:2rem;
  padding:2rem 0;
}

`;


export default function DashboardScreen() {
  const orderSummary = useSelector((state) => state.orderSummary);
  const { loading, summary, error } = orderSummary;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(summaryOrder());
  }, [dispatch]);
  return (
    <DashboardContainer className="container">
      <div className="row">
        <h1>Dashboard</h1>
      </div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <ul className="row summary">
            <li>
              <div className="summary-title color1">
                <span>
                  <i className="fa fa-users" /> Utilisateurs
                </span>
              </div>
              <div className="summary-body">{summary.users[0].numUsers}</div>
            </li>
            <li>
              <div className="summary-title color2">
                <span>
                  <i className="fa fa-shopping-cart" /> Commandes
                </span>
              </div>
              <div className="summary-body">
                {summary.orders[0] ? summary.orders[0].numOrders : 0}
              </div>
            </li>
            <li>
              <div className="summary-title color3">
                <span>
                  <i className="fa fa-money" /> Les ventes
                </span>
              </div>
              <div className="summary-body">
                $
                {summary.orders[0]
                  ? summary.orders[0].totalSales.toFixed(2)
                  : 0}
              </div>
            </li>
          </ul>
          <div>
            <div>
              <h2>Ventes</h2>
              {summary.dailyOrders.length === 0 ? (
                <MessageBox>Non vendus</MessageBox>
              ) : (
                <Chart
                  width="100%"
                  height="400px"
                  chartType="AreaChart"
                  loader={<div>Chargement de la charte </div>}
                  data={[
                    ['Date', 'Sales'],
                    ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                  ]}
                ></Chart>
              )}
            </div>
          </div>
          <div>
            <h2>Categories</h2>
            {summary.prestationCategories.length === 0 ? (
              <MessageBox>Pas de Categorie</MessageBox>
            ) : (
              <Chart
                width="100%"
                height="400px"
                chartType="PieChart"
                loader={<div>Chargement de la charte</div>}
                data={[
                  ['Category', 'Products'],
                  ...summary.prestationCategories.map((x) => [x._id, x.count]),
                ]}
              />
            )}
          </div>
        </>
      )}
    </DashboardContainer>
  );
}
