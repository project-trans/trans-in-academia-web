<script lang="jsx">
import eventslist from '/public/events/events.yaml'

export default {
  render() {
    var tmpl = [];
    for (const event in eventslist.Events) {
      // TODO: time, past or current events, accept markdown grammar
      const image = typeof eventslist.Events[event].image != "undefined" ? "/events/assets/" + eventslist.Events[event].image : "";
      const description = typeof eventslist.Events[event].description != "undefined" ? eventslist.Events[event].description : "";
      const link = typeof eventslist.Events[event].link != "undefined" ? eventslist.Events[event].link : { type: undefined, url: "#" };
      const lang = typeof eventslist.Events[event].lang != "undefined" ? eventslist.Events[event].lang : "English / Mandarian / Wu / Japanese";
      console.log(!!link.type)
      tmpl.push(
        <div class="event" loading='lazy'>
          <a href={link.url}>
            <img src={image} alt={event} />
          </a>
          <div class="text-wrapper">
            <h3> {event} </h3>
            <p>
              {lang}
            </p>
            <a class="link-type" href={link.url}>
              {link.type}
            </a>
            <p> {description} </p>
          </div>
        </div>);
    }
    return tmpl;
  },
};
</script>

<style lang="scss">
.nolink {
  display: none;
}

div {
  text-decoration: none;

  .event {
    margin: 3rem 0;
    padding-bottom: 1rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);

    :hover {
      transition: cubic-bezier(); //@TODO
    }

    img {
      border-radius: 1rem 1rem 0 0;
    }

    .text-wrapper {
      display: flex;
      flex-direction: column;
      margin: 1rem;

      h3 {
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 0;
        font-family: "Inter Tight";
        font-weight: 500;
      }

      p {
        text-align: left;
        font-family: "Inter";
        margin-top: 0;
        color: #000000ba;
      }

      .link-type {
        color: black;
        margin: 0;
        border: 2px solid black;
        text-decoration: none;
        width: min-content;
        border-radius: 2rem;
        padding: 0.05rem 0.5rem;
      }
    }
  }
}
</style>
