<script>
import { h } from "vue";

const iconSrc = () =>
  new URL(`../../assets/icons/arrow-up-right.svg`, import.meta.url).href;
export default {
  props: {
    as: {
      type: String,
      default: "button",
    },
  },

  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          to: {
            name: "contact",
          },
        },
        [
          h("span", slots.default?.()),
          h("img", {
            src: iconSrc(),
          }),
        ]
      );
  },
};
</script>