import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';

class SearchItem {
    constructor(public track: string,
                public artist: string,
                public trackView: string,
                public thumbnail: string,
                public artistId: string,
                public collection: string,
                public genre: string,
                public trackCount:number,
                public collectionPrice:number,
                public trackTimeMillis:number,
                public trackPrice:number) {
    }
}

@Injectable()
export class SearchService {
    results: SearchItem[];
    loading: boolean;

    constructor( private http: Http){
        this.results =[];
        this.loading = false;
    }

    search(term: string) {
        let promise = new Promise((resolve, reject) => {
            let apiRoot = `${term}`;
            this.http.get('https://itunes.apple.com/search?term=' + apiRoot)
                .toPromise()
                .then(
                    res => { // Success
                        this.results = res.json().results.map(item => {
                            return new SearchItem(
                                item.trackName,
                                item.artistName,
                                item.trackViewUrl,
                                item.artworkUrl30,
                                item.artistId,
                                item.collectionName,
                                item.primaryGenreName,
                                item.trackCount,
                                item.collectionPrice,
                                +(item.trackTimeMillis/60000).toFixed(2),
                                item.trackPrice
                                
                            );
                        });
                        // this.results = res.json().results;
                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }
}
