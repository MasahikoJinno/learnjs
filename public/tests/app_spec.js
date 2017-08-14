describe('LeanJS', () => {
  it('can show a problem view', () => {
    leanjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });
  it('show the landing page view when there is no hash', () => {
    leanjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });
  it('passes the hash view parameter to the view function', () => {
    spyOn(leanjs, 'problemView');
    leanjs.showView('#problem-42');
    expect(leanjs.problemView).toHaveBeenCalledWith('42');
  });
  it('invoke the router when loaded', () => {
    spyOn(leanjs, 'showView');
    leanjs.appOnReady();
    expect(leanjs.showView).toHaveBeenCalledWith(window.location.hash);
  });
  it('subscribes to the hash change event', () => {
    leanjs.appOnReady();
    spyOn(leanjs, 'showView');
    $(window).trigger('hashchange');
    expect(leanjs.showView).toHaveBeenCalledWith(window.location.hash);
  });
  describe('problem view', () => {
    it('has a title that includes the priblem number', () => {
      const view = leanjs.problemView('1');
      expect(view.text()).toEqual('Problem #1 Comming soon!');
    });
  });
});
