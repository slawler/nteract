import React from 'react';

import { shallow, mount } from 'enzyme';

import Immutable from 'immutable';

const chai = require('chai');
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const expect = chai.expect;

const sinon = require('sinon');

import {
  Vega,
  VegaLite,
  VegaEmbed,
} from '../../../../src/notebook/components/transforms/vega';

const spec = Immutable.fromJS({});

describe('Vega', () => {
  it('renders VegaEmbed with embedMode vega', () => {
    const wrapper = shallow(
      <Vega data={spec} />
    );

    expect(wrapper.name()).to.equal('VegaEmbed');
    expect(wrapper.props().embedMode).to.equal('vega');
  });
});

describe('VegaLite', () => {
  it('renders VegaEmbed with embedMode vega-lite', () => {
    const wrapper = shallow(
      <VegaLite data={spec} />
    );

    expect(wrapper.name()).to.equal('VegaEmbed');
    expect(wrapper.props().embedMode).to.equal('vega-lite');
  });
});

describe('VegaEmbed', () => {
  it('embeds vega', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <VegaEmbed
        data={spec}
        embedMode="vega-lite"
        renderedCallback={spy}
      />
    );

    const element = wrapper.instance();

    expect(element.shouldComponentUpdate()).to.equal(false);
    expect(spy).to.have.been.called;
  })
})
