@use "../../variables" as *;
.about {
  margin-bottom: 40px;
  background-color: $white;
  .about-img-wrapper {
    .about-img {
      img {
        width: 100%;
      }
    }
  }
  .message {
    text-align: center;
    padding: 32px 24px;
    font-size: $fontsize-s;
    background-color: $white_smoke;
    h2 {
      font-size: $fontsize-l;
      color: $orange_bistre;
    }
  }
}
@media (min-width: $breakpoint-lg) {
  .about {
    padding: 0 16px 100px;
    .message {
      padding: 52px 27px;
      h2 {
        font-size: $fontsize-xl;
      }
    }
  }
}
