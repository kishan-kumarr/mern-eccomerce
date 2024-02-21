class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  //* searching product behalf of PRODUCT NAME
  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find(keyword);
    return this;
  }

  //* Filter product behalf of PRODUCT CATEGORY
  filter() {
    const copyKeyword = { ...this.queryString };

    //* removing all query string fields expect CATEGORY
    const removeOtherKeyword = ["keyword", "page", "limit"];

    removeOtherKeyword.forEach((item) => {
      delete copyKeyword[item];
    });

    // this.query = this.query.find(priceKeyword);

    //* filter product behalf of PRODUCT PRICE
    let priceKeyword = JSON.stringify(copyKeyword);

    //* making mongo query like $gt, $gte, $lt and $lte
    /* This is a regular expression. It is replacing the string with the value of the key. */
    priceKeyword = priceKeyword.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (key) => `$${key}`
    );

    priceKeyword = JSON.parse(priceKeyword);
    // console.log(priceKeyword);

    this.query = this.query.find(priceKeyword);
    return this;
  }

  //* PAGINATION
  pagination(resultPerPage = 10) {
    const currentPage = Number(this.queryString.page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
