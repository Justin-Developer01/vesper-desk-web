export function DeskPreview() {
  return (
    <figure className="desk-scene m-0">
      <div className="desk-popout" aria-hidden="true">
        <span>Pop-out</span>
      </div>
      <div className="desk">
        <div className="desk-bar">
          <span className="desk-mark" aria-hidden="true" />
          <strong>Vesper Desk</strong>
          <div className="desk-chips" aria-hidden="true">
            <span>Evening three</span>
            <span>Standard</span>
          </div>
        </div>
        <div className="desk-stage">
          <div className="pane pane-main">
            <span className="pane-label">North room</span>
          </div>
          <div className="desk-side">
            <div className="pane pane-east">
              <span className="pane-label">East window</span>
            </div>
            <div className="pane pane-lamp">
              <span className="pane-label">Late lamp</span>
            </div>
          </div>
          <aside className="chat" aria-hidden="true">
            <header>Chat</header>
            <ul>
              <li>
                <span>n</span>
                Keeping this one docked.
              </li>
              <li>
                <span>e</span>
                The desk can stay up.
              </li>
              <li>
                <span>l</span>
                Swap the layout after this.
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-faint">
        A sketch of the desk — three streams, docked chat, and a pop-out. Not a live capture.
      </figcaption>
    </figure>
  );
}
