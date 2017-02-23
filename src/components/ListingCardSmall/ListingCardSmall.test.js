import React from 'react';
import { renderShallow, createUser, createListing } from '../../util/test-helpers';
import ListingCardSmall from './ListingCardSmall';

describe('ListingCardSmall', () => {
  it('matches snapshot', () => {
    const author = createUser('user1');
    const listing = { ...createListing('listing1'), author };
    const tree = renderShallow(<ListingCardSmall listing={listing} />);
    expect(tree).toMatchSnapshot();
  });
});
