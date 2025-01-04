import React from 'react'

export default function Modal() {
    return (
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalTour">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-body p-5">
                        <h2 className="fw-bold mb-0">What's new</h2>

                        <ul className="d-grid gap-4 my-5 list-unstyled small">
                            <li className="d-flex gap-4">
                                <svg className="bi text-body-secondary flex-shrink-0" width="48" height="48"><use xlink:href="#grid-fill"></use></svg>
                                <div>
                                    <h5 className="mb-0">Grid view</h5>
                                    Not into lists? Try the new grid view.
                                </div>
                            </li>
                            <li className="d-flex gap-4">
                                <svg className="bi text-warning flex-shrink-0" width="48" height="48"><use xlink:href="#bookmark-star"></use></svg>
                                <div>
                                    <h5 className="mb-0">Bookmarks</h5>
                                    Save items you love for easy access later.
                                </div>
                            </li>
                            <li className="d-flex gap-4">
                                <svg className="bi text-primary flex-shrink-0" width="48" height="48"><use xlink:href="#film"></use></svg>
                                <div>
                                    <h5 className="mb-0">Video embeds</h5>
                                    Share videos wherever you go.
                                </div>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal" fdprocessedid="8c6w8p">Great, thanks!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
