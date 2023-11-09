<script lang="jsx">
import eventslist from '/public/events/events.yaml'


export default {
    render() {
        var tmpl = [];
        tmpl.push(<h2> Events </h2>);
        // console.log(eventslist);
        for (const event in eventslist.Events) {
            // TODO: time, past or current events, accept markdown grammar
            const image = typeof eventslist.Events[event].image != "undefined" ? "/events/" + eventslist.Events[event].image : "";
            const description = typeof eventslist.Events[event].description != "undefined" ? eventslist.Events[event].description : "";
            const link = typeof eventslist.Events[event].link != "undefined" ? eventslist.Events[event].link : {name : "nolink", url: "#"};
            // console.log("image=" + image);
            tmpl.push(
                    <div class="event">
                      <img src={image} alt={event} />
                    <h3> {event} <span class={link.name}> <a href={link.url}> &gt; {link.name}</a> </span> </h3>
                      <p> {description} </p>
                    </div>);
        }
        // console.log(tmpl);
        return tmpl;
    },
};
</script>

<style lang="scss">
events {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 3;
}
.nolink {
  display: none;
}
div .event {
  padding-bottom: 3rem;
}
</style>
