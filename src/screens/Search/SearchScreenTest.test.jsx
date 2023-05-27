import SearchScreen from '';

describe('SearchScreen') {
  it('renders all the found elements') {
    // mock data
    data = [ 
      {
        id: "id1",
        title: "place1"
      },
      {
        id: "id2",
        title: "place2"
      }
    ]
    // expect FlatList to have 2 data.size elements
    queryAllByText = render(SearchScreen(data))
    expect(queryAllByText("place").size(), 2)
  }
}
